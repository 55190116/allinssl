import { NInput, NButton } from 'naive-ui'
import { useTheme, useThemeCssVar } from '@baota/naive-ui/theme'
import { Search } from '@vicons/carbon'
import { $t } from '@locales/index'
import { useController } from './useController'

import BaseComponent from '@components/BaseLayout'
import EmptyState from '@components/TableEmptyState'

/**
 * 证书管理组件
 */
export default defineComponent({
	name: 'CertManage',
	setup() {
		const { TableComponent, PageComponent, SearchComponent, openUploadModal, getRowClassName } = useController()

		const cssVar = useThemeCssVar(['contentPadding', 'borderColor', 'headerHeight', 'iconColorHover'])

		return () => (
			<div class="h-full flex flex-col" style={cssVar.value}>
				<div class="mx-auto max-w-[1600px] w-full p-6">
					<BaseComponent
						v-slots={{
							headerLeft: () => (
								<NButton type="primary" size="large" class="px-5" onClick={openUploadModal}>
									{$t('t_13_1745227838275')}
								</NButton>
							),
							headerRight: () => <SearchComponent placeholder={$t('t_14_1745227840904')} />,
							content: () => (
								<div class="rounded-lg">
									<TableComponent
										size="medium"
										rowClassName={getRowClassName}
										v-slots={{
											empty: () => <EmptyState addButtonText={$t('t_1_1747047213009')} onAddClick={openUploadModal} />,
										}}
									/>
								</div>
							),
							footerRight: () => (
								<div class="mt-4 flex justify-end">
									<PageComponent />
								</div>
							),
						}}
					></BaseComponent>
				</div>
			</div>
		)
	},
})
