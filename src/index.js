import ReactDOM from 'react-dom/client'
import '@/style/reset.scss'
import '@/assets/iconfont/iconfont.scss'
import '@/assets/fonts/font.scss'
import '@/style/common.scss'

import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
