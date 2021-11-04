import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from 'modules/posts/components/posts-page';
import Authors from 'modules/authors/components/authors-page';
import { RouterPath } from './router-path';
import { EmptyRoute } from './empty-route';

export const RouteManager = (): JSX.Element => (
	<Router basename={process.env.PUBLIC_URL}>
		<Routes>
			<Route index element={<Posts />} />
			<Route path={RouterPath.POSTS} element={<Posts />} />
			<Route path={RouterPath.AUTHORS} element={<Authors />} />
			<Route path="*" element={<EmptyRoute />} />
		</Routes>
	</Router>
);
