import { IAuthor } from 'modules/authors/interfaces/author.interface';

export interface IAddPostRequestDTO {
	title: string;
	body: string;
}

export interface IPost extends IAddPostRequestDTO {
	id: number;
	title: string;
	body: string;
	creationDate: string;
	author: IAuthor;
}
