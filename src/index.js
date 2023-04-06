import ReactDOM from 'react-dom/client'
import '@/style/reset.scss'
import '@/assets/iconfont/iconfont.scss'
import '@/assets/fonts/font.scss'
import '@/style/common.scss'
import '@/language'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)
