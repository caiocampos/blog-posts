import { makeAutoObservable } from 'mobx';

export default class LayoutStore {
	collapsed = false;

	constructor() {
		makeAutoObservable(this);
	}

	setCollapsed = (collapsed: boolean): void => {
		this.collapsed = collapsed;
	};
}
