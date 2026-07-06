import { FileText, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export enum RouterPath {
	HOME = '/',
	POSTS = '/posts',
	AUTHORS = '/authors'
}

export interface IPage {
	id: string;
	name: string;
	path: string;
	icon: LucideIcon;
}

export interface IPages {
	posts: IPage;
	authors: IPage;
}

export const pages: IPages = {
	posts: {
		id: 'posts',
		name: 'Postagens',
		path: RouterPath.POSTS,
		icon: FileText
	},
	authors: {
		id: 'authors',
		name: 'Autores',
		path: RouterPath.AUTHORS,
		icon: Users
	}
};
