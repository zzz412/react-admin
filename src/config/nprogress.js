import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 500, // 递增进度条速度
	showSpinner: false, // 是否显示加载icon
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3 // 初始化百分比
})

export default NProgress
