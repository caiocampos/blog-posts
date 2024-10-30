import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout as AntLayout, Menu, Modal, ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { PageHeader } from '@ant-design/pro-layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { pages, IPages, IPage } from '@/routing/router-path';
import useStores from '@/common/hooks/use-stores';
import classes from './layout.module.scss';

const { Content, Sider } = AntLayout;

const menuItems = Object.values(pages).map(({ icon: Icon, path, name }: IPage) => ({
	label: name,
	key: path,
	icon: <Icon />
}));

const Layout = ({
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
	const navigate = useNavigate();
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
					<Menu
						theme="dark"
						selectedKeys={[page.id]}
						mode="inline"
						items={menuItems}
						onClick={({ key }) => navigate(key)}
					/>
				</Sider>
				<AntLayout>
					<PageHeader title={title} subTitle={subtitle}>
						<Modal title="Erro!" open={error !== null} onOk={clearError} onCancel={clearError}>
							{error}
						</Modal>
						<Content className={classes.Content}>{children}</Content>
					</PageHeader>
				</AntLayout>
			</AntLayout>
		</ConfigProvider>
	);
};

const LayoutObserver = observer(Layout);

export default LayoutObserver;
