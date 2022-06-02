import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'

worker.start()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
