import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout as AntLayout, PageHeader, Menu, Modal } from 'antd';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { useLocation, useHistory } from 'react-router-dom';
import { pages, IPages, IPage } from 'routing/router-path';
import useStores from 'common/hooks/use-stores';
import classes from './layout.module.scss';

const { Content, Sider } = AntLayout;

const _Layout = ({
	children,
	title,
	subtitle,
	className,
	...rest
}: {
	children?: ReactNode;
	title?: string;
	subtitle?: string;
	className?: string;
}) => {
	const location = useLocation();
	const history = useHistory();
	const {
		error,
		clearError,
		layout: { collapsed, setCollapsed }
	} = useStores();
	const pageKey = (location.pathname || '').slice(1) as keyof IPages;
	const page: IPage = pages[pageKey] || {};

	return (
		<ConfigProvider locale={ptBR}>
			<AntLayout className={`${classes.Page} ${className}`} {...rest}>
				<Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
					<div className={classes.Logo} />
					<Menu theme="dark" selectedKeys={[page.id]} mode="inline">
						{Object.values(pages).map(({ id, icon: Icon, path, name }: IPage) => (
							<Menu.Item key={id} icon={<Icon />} onClick={() => history.push(path)}>
								{name}
							</Menu.Item>
						))}
					</Menu>
				</Sider>
				<AntLayout>
					<PageHeader title={title} subTitle={subtitle}>
						<Modal title="Basic Modal" visible={!!error} onOk={clearError} onCancel={clearError}>
							{error}
						</Modal>
						<Content className={classes.Content}>{children}</Content>
					</PageHeader>
				</AntLayout>
			</AntLayout>
		</ConfigProvider>
	);
};

const Layout = observer(_Layout);

export default Layout;
