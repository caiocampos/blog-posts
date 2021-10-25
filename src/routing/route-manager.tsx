import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Posts from 'modules/posts';
import Authors from 'modules/authors';
import { RouterPath } from './router-path';
import { EmptyRoute } from './empty-route';

export const RouteManager = (): JSX.Element => (
	<Router>
		<Switch>
			<Redirect exact from={RouterPath.HOME} to={RouterPath.POSTS} />
			<Route path={RouterPath.POSTS}>
				<Posts />
			</Route>
			<Route path={RouterPath.AUTHORS}>
				<Authors />
			</Route>
			<Route path="">
				<EmptyRoute />
			</Route>
		</Switch>
	</Router>
);
