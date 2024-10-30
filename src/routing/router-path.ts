import { ExoticComponent } from 'react';
import FileOutlined from '@ant-design/icons/FileOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';

export enum RouterPath {
	HOME = '/',
	POSTS = '/posts',
	AUTHORS = '/authors'
}

export interface IPage {
	id: string;
	name: string;
	path: string;
	icon: ExoticComponent;
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
		icon: FileOutlined
	},
	authors: {
		id: 'authors',
		name: 'Autores',
		path: RouterPath.AUTHORS,
		icon: UserOutlined
	}
};
