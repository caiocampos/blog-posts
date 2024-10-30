import { makeAutoObservable } from 'mobx';

export default class LayoutStore {
	collapsed = true;

	constructor() {
		makeAutoObservable(this);
	}

	setCollapsed = (collapsed: boolean): void => {
		this.collapsed = collapsed;
	};
}
