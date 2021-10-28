import { makeAutoObservable } from 'mobx';
import MainStore from 'common/stores/main-store';
import AuthorService from './author-service';
import { IAddAuthorRequestDTO, IAuthor } from './interfaces/author.interface';

export default class AuthorStore {
	mainStore: MainStore;

	constructor(mainStore: MainStore) {
		makeAutoObservable(this, { mainStore: false });
		this.mainStore = mainStore;
	}

	getAll = async (): Promise<Array<IAuthor>> => {
		try {
			return await AuthorService.getAll();
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
			return [];
		}
	};

	create = async (author: IAddAuthorRequestDTO): Promise<IAuthor | null> => {
		try {
			return await AuthorService.create(author);
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
			return null;
		}
	};

	delete = async (id: string): Promise<void> => {
		try {
			await AuthorService.delete(id);
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
		}
	};
}
