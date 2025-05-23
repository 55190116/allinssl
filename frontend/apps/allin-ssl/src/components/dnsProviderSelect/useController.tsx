import { ref, watch, onMounted, onUnmounted } from 'vue';
import type { DnsProviderSelectProps, DnsProviderOption, DnsProviderType, DnsProviderSelectEmits } from './types';

// 绝对内部导入 - Stores
import { useStore } from '@layout/useStore';
// 绝对内部导入 - Hooks
import { useError } from '@baota/hooks/error';
// 绝对内部导入 - Utilities
import { $t } from '@locales/index';


/**
 * @function useDnsProviderSelectController
 * @description DnsProviderSelect 组件的控制器逻辑
 * @param props - 组件的 props
 * @param emit - 组件的 emit 函数
 * @returns {DnsProviderControllerExposes} 控制器暴露给视图的数据和方法
 */
export function useDnsProviderSelectController(
	props: DnsProviderSelectProps,
	emit: DnsProviderSelectEmits,
) {
	const { handleError } = useError();
	const { fetchDnsProvider, resetDnsProvider, dnsProvider } = useStore();

	const param = ref<DnsProviderOption>({
		label: '',
		value: '',
		type: '',
	});
	const dnsProviderRef = ref<DnsProviderOption[]>([]);
	const isLoading = ref(false);
	const errorMessage = ref('');

	/**
	 * @function goToAddDnsProvider
	 * @description 跳转到DNS提供商授权页面
	 */
	const goToAddDnsProvider = () => {
		window.open('/auth-api-manage', '_blank');
	};

	/**
	 * @function handleUpdateType
	 * @description 根据当前 param.value 更新 param 对象的 label 和 type，并 emit 更新事件
	 */
	const handleUpdateType = () => {
		const selectedProvider = dnsProvider.value.find((item) => {
			// 根据 props.valueType 决定是比较 item.value 还是 item.type
			const valueToCompare = props.valueType === 'value' ? item.value : item.type;
			return valueToCompare === param.value.value;
		});

		if (selectedProvider) {
			param.value = {
				label: selectedProvider.label,
				value: props.valueType === 'value' ? selectedProvider.value : selectedProvider.type,
				type: props.valueType === 'value' ? selectedProvider.type : selectedProvider.value,
			};
		} else if (dnsProvider.value.length > 0 && param.value.value === '') {
			// 如果 param.value 为空（例如初始状态或清空后），且 dnsProvider 列表不为空，则默认选中第一个
			param.value = {
				label: dnsProvider.value[0]?.label || '',
				value: props.valueType === 'value' ? dnsProvider.value[0]?.value || '' : dnsProvider.value[0]?.type || '',
				type: props.valueType === 'value' ? dnsProvider.value[0]?.type || '' : dnsProvider.value[0]?.value || '',
			};
		}
		emit('update:value', { ...param.value });
	};

	/**
	 * @function handleUpdateValue
	 * @description 更新 param.value 并触发类型更新
	 * @param value - 新的选中值
	 */
	const handleUpdateValue = (value: string) => {
		param.value.value = value;
		handleUpdateType();
	};

	/**
	 * @function loadDnsProviders
	 * @description 加载DNS提供商选项
	 * @param type - DNS提供商类型，默认为 props.type
	 */
	const loadDnsProviders = async (type: DnsProviderType = props.type) => {
		isLoading.value = true;
		errorMessage.value = '';
		try {
			await fetchDnsProvider(type);
			// 数据加载后，如果 props.value 有值，尝试根据 props.value 初始化 param
			// 否则 handleUpdateType 会尝试选择第一个或保持空
			if (props.value) {
				handleUpdateValue(props.value);
			} else {
				handleUpdateType(); // 确保在 dnsProvider 更新后，param 也得到相应更新
			}
		} catch (error) {
			errorMessage.value = typeof error === 'string' ? error : $t('t_0_1746760933542'); // '获取DNS提供商列表失败'
			handleError(error);
		} finally {
			isLoading.value = false;
		}
	};

	/**
	 * @function handleFilter
	 * @description NSelect 组件的搜索过滤函数
	 * @param pattern - 搜索文本
	 * @param option - 当前选项
	 * @returns {boolean} 是否匹配
	 */
	const handleFilter = (pattern: string, option: DnsProviderOption): boolean => {
		return option.label.toLowerCase().includes(pattern.toLowerCase());
	};

	watch(
		() => dnsProvider.value,
		(newVal) => {
			dnsProviderRef.value =
				newVal.map((item) => ({
					label: item.label,
					value: props.valueType === 'value' ? item.value : item.type,
					type: props.valueType === 'value' ? item.type : item.value, // 确保 type 也被正确映射
				})) || [];
			// 当 dnsProvider 列表更新后，重新评估 param 的值
			// 如果当前 param.value 对应的项仍然存在，则更新 param 的 label 和 type
			// 如果不存在（例如，列表刷新后原来的项没了），则尝试根据 props.value (如果存在) 或列表第一项来设定
			const currentParamExists = dnsProviderRef.value.some(opt => opt.value === param.value.value);
			if (currentParamExists) {
				handleUpdateType();
			} else if (props.value && dnsProviderRef.value.some(opt => opt.value === props.value)) {
				handleUpdateValue(props.value);
			} else {
				// 如果 props.value 也不在新的列表里，或者 props.value 为空，则默认选择第一个或清空
				param.value.value = dnsProviderRef.value?.[0]?.value || '';
				handleUpdateType();
			}
		},
		{ deep: true }, // 监听 dnsProvider 数组内部变化
	);

	watch(
		() => props.value,
		(newValue) => {
			// 仅当外部 props.value 与内部 param.value.value 不一致时才更新
			// 避免因子组件 emit('update:value') 导致父组件 props.value 更新，从而再次触发此 watch 造成的循环
			if (newValue !== param.value.value) {
				handleUpdateValue(newValue);
			}
		},
		{ immediate: true },
	);

	watch(
		() => props.type,
		(newType) => {
			loadDnsProviders(newType);
		}
	);

	onMounted(() => {
		loadDnsProviders(props.type);
	});

	onUnmounted(() => {
		resetDnsProvider();
	});

	return {
		param,
		dnsProviderRef,
		isLoading,
		errorMessage,
		goToAddDnsProvider,
		handleUpdateValue,
		loadDnsProviders,
		handleFilter,
	};
}