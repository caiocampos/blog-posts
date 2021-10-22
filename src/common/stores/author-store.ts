import { makeAutoObservable } from 'mobx';
import MainStore from './main-store';

export default class AuthorStore {
	mainStore: MainStore;

	constructor(mainStore: MainStore) {
		makeAutoObservable(this, { mainStore: false });
		this.mainStore = mainStore;
	}
}
