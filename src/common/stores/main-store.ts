import { makeAutoObservable } from 'mobx';
import AuthorStore from './author-store';
import LayoutStore from './layout-store';
import PostStore from './post-store';

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

	clearError = (): void => {
		this.error = null;
	};
}
