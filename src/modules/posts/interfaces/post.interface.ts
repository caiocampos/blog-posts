import { IAuthorResponseDTO } from 'modules/authors/interfaces/author.interface';

export interface IPostResponseDTO {
	id: number;
	title: string;
	body: string;
	creationDate: string;
	author: IAuthorResponseDTO;
}

export interface IAddPostRequestDTO {
	title: string;
	body: string;
}
