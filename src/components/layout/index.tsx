import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout as AntLayout, PageHeader, Menu } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import { pages, IPages, IPage } from 'routing/router-path';
import useStores from 'common/hooks/use-stores';

const { Content, Sider } = AntLayout;

const _Layout = ({ children, title, subtitle }: { children?: ReactNode; title?: string; subtitle?: string }) => {
	const location = useLocation();
	const history = useHistory();
	const {
		layout: { collapsed, setCollapsed }
	} = useStores();
	const page: IPage = pages[(location.pathname || '').slice(1) as keyof IPages] || {};

	const onCollapse = (collapsed: boolean) => {
		setCollapsed(collapsed);
	};
	return (
		<AntLayout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div className="logo" />
				<Menu theme="dark" selectedKeys={[page.id]} mode="inline">
					{Object.values(pages).map(({ id, icon: Icon, path, name }: IPage) => (
						<Menu.Item key={id} icon={<Icon />} onClick={() => history.push(path)}>
							{name}
						</Menu.Item>
					))}
				</Menu>
			</Sider>
			<AntLayout className="site-layout">
				<PageHeader className="site-page-header" title={title} subTitle={subtitle}>
					<Content style={{ margin: '0 16px' }}>
						<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
							{children}
						</div>
					</Content>
				</PageHeader>
			</AntLayout>
		</AntLayout>
	);
};

const Layout = observer(_Layout);

export default Layout;
