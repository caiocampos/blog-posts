import { makeAutoObservable } from 'mobx';
import MainStore from 'common/stores/main-store';
import { IAddPostRequestDTO, IPost } from './interfaces/post.interface';
import PostService from './post-service';

export default class PostStore {
	mainStore: MainStore;

	constructor(mainStore: MainStore) {
		makeAutoObservable(this, { mainStore: false });
		this.mainStore = mainStore;
	}

	getAll = async (author: string): Promise<Array<IPost>> => {
		try {
			return await PostService.getAll(author);
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
			return [];
		}
	};

	create = async (idAuthor: number, post: IAddPostRequestDTO): Promise<IPost | null> => {
		try {
			return await PostService.create(idAuthor, post);
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
			return null;
		}
	};

	delete = async (id: number): Promise<void> => {
		try {
			await PostService.delete(id);
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
		}
	};
}
