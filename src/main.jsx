import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { App } from './pages/app';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
