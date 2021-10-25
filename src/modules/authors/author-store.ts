import { makeAutoObservable } from 'mobx';
import MainStore from 'common/stores/main-store';
import AuthorService from './author-service';
import { IAuthorResponseDTO } from './interfaces/author.interface';

export default class AuthorStore {
	mainStore: MainStore;

	constructor(mainStore: MainStore) {
		makeAutoObservable(this, { mainStore: false });
		this.mainStore = mainStore;
	}

	getAll = async (): Promise<Array<IAuthorResponseDTO>> => {
		try {
			return await AuthorService.getAll();
		} catch (e) {
			this.mainStore.setErrorFromAxios(e);
			return [];
		}
	};
}
