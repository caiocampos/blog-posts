import { makeAutoObservable } from 'mobx';
import { toast } from 'sonner';
import PostStore from '@/modules/posts/post-store';
import AuthorStore from '@/modules/authors/author-store';

export default class MainStore {
	authors: AuthorStore;
	posts: PostStore;

	constructor() {
		this.authors = new AuthorStore(this);
		this.posts = new PostStore(this);
		makeAutoObservable(this, { authors: false, posts: false });
	}

	setErrorFromAxios = (error: unknown): void => {
		console.warn('request error', error);
		toast.error(getErrorMessage(error));
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
