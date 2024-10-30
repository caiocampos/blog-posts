import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Posts from '@/modules/posts/components/posts-page';
import Authors from '@/modules/authors/components/authors-page';
import { RouterPath } from './router-path';
import { EmptyRoute } from './empty-route';

const router = createBrowserRouter(
	[
		{
			path: RouterPath.HOME,
			element: <Posts />
		},
		{
			path: RouterPath.POSTS,
			element: <Posts />
		},
		{
			path: RouterPath.AUTHORS,
			element: <Authors />
		},
		{
			path: '*',
			element: <EmptyRoute />
		}
	],
	{ basename: import.meta.env.BASE_URL ?? "" }
);

export const RouteManager = (): JSX.Element => <RouterProvider router={router} />;
