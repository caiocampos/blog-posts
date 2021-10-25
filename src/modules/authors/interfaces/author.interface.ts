import { IPostResponseDTO } from 'modules/posts/interfaces/post.interface';

export interface IAuthorResponseDTO {
	id: number;
	name: string;
	nickname: string;
	birthDate: string;
	posts: Array<IPostResponseDTO>;
}

export interface IAddAuthorRequestDTO {
	name: string;
	nickname: string;
	birthDate: string;
}
