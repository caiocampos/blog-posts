import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pages, IPages, IPage, RouterPath } from '@/routing/router-path';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

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
	const pageKey = ((location.pathname === RouterPath.HOME ? RouterPath.POSTS : location.pathname) || '').slice(
		1
	) as keyof IPages;
	const page: IPage | undefined = pages[pageKey];

	return (
		<div className="bg-background min-h-dvh">
			<Toaster />
			<header className="bg-card border-b">
				<div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-lg font-bold">
							BP
						</div>
						<div>
							<h1 className="text-lg leading-tight font-semibold">{title ?? 'Blog Posts'}</h1>
							{subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
						</div>
					</div>
					<Tabs value={page?.path} onValueChange={(value) => navigate(value as string)}>
						<TabsList>
							{Object.values(pages).map(({ id, name, path, icon: Icon }: IPage) => (
								<TabsTrigger key={id} value={path}>
									<Icon className="size-4" />
									{name}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>
			</header>
			<main className={cn('mx-auto max-w-5xl px-4 py-6', className)} {...rest}>
				{children}
			</main>
		</div>
	);
};

export default Layout;
