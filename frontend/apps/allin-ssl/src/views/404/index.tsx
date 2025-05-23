import { useRouter, type Router } from 'vue-router'
import { NButton } from 'naive-ui'
import { useThemeCssVar } from '@baota/naive-ui/theme'
import { $t } from '@locales/index' // 引入 $t


// 错误图标
// Changed default color to use a theme variable (textColor1)
const errorIcon = (size: number = 16, color: string = 'var(--n-text-color-1)') => {
	return (
		<svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={color}>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"
			/>
		</svg>
	)
}

export default defineComponent({
	setup() {
		// 路由实例
		const router: Router = useRouter()

		// 获取主题变量
		// Added textColor1 for the errorIcon default color
		const cssVar = useThemeCssVar(['baseColor','textColorBase', 'textColorSecondary', 'textColorDisabled', 'textColorInverse', 'textColor1'])

		return () => (
			<div class="flex flex-col items-center justify-center min-h-screen p-4" style={cssVar.value}> {/* Added p-4 for mobile padding */}
				<div class="text-center px-4 sm:px-8 max-w-[60rem] mx-auto"> {/* Responsive horizontal padding */}
					<div
						// Responsive font size and margin
						class="text-[4.5rem] sm:text-[6rem] md:text-[8rem] font-bold leading-none mb-2 sm:mb-4"
						style={{
							color: 'var(--n-text-color-base)', // Use theme variable for color
							textShadow: '2px 2px 8px rgba(0,0,0,0.25)', // Existing text shadow
						}}
					>
						404
					</div>
					{/* Responsive margin; Icon color explicitly set to cardColor to match "404" text */}
					<div class="flex items-center justify-center mb-4 sm:mb-8">
						{errorIcon(60, 'var(--n-text-color-base)')}
					</div>
					{/* Responsive font size and margin */}
					<div class="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-4 sm:mb-8" style={{ color: 'var(--n-text-color-secondary)' }}>
						{$t('t_0_1744098811152')}
					</div>
					<NButton
						// Button colors from theme variables
						style={{
							backgroundColor: 'var(--n-text-color-base)',
							color: 'var(--n-base-color)',
							border: 'none'
						}}
						onClick={() => router.push('/')}
					>
						{$t('t_1_1744098801860')}
					</NButton>
					{/* Responsive margin and font size */}
					<div class="mt-4 sm:mt-8 text-[1rem] sm:text-[1.1rem] md:text-[1.3rem]" style={{ color: 'var(--n-text-color-disabled)' }}>
						{$t('t_2_1744098804908')}
					</div>
				</div>
			</div>
		)
	},
})
