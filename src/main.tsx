import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { RouteManager } from '@/routing/route-manager';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouteManager />
	</StrictMode>
);
