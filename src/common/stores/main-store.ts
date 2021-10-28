import { makeAutoObservable } from 'mobx';
import LayoutStore from './layout-store';
import PostStore from 'modules/posts/post-store';
import AuthorStore from 'modules/authors/author-store';

export default class MainStore {
	error: string | null = null;

	layout: LayoutStore;

	authors: AuthorStore;
	posts: PostStore;

	constructor() {
		this.layout = new LayoutStore();
		this.authors = new AuthorStore(this);
		this.posts = new PostStore(this);
		makeAutoObservable(this, { authors: false, posts: false });
	}

	setError = (error: string | null): void => {
		this.error = error;
	};

	setErrorFromAxios = (error: unknown): void => {
		console.warn(error);
		this.error = getErrorMessage(error);
	};

	clearError = (): void => {
		this.error = null;
	};
}

interface IGenericError {
	response?: {
		data: { message: string | string[] };
	};
	message?: string | string[];
}

const errorParser = (error: IGenericError): string => {
	const messages = error?.response?.data?.message || error?.message;
	if (Array.isArray(messages)) {
		return messages.join(' ');
	}
	return '' + messages;
};

const getErrorMessage = (error: unknown): string => {
	return errorParser(error as IGenericError) || 'Não foi possível realizar a solicitação';
};
