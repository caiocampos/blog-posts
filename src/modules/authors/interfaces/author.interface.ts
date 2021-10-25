import { IPost } from 'modules/posts/interfaces/post.interface';

export interface IAddAuthorRequestDTO {
	name: string;
	nickname: string;
	birthDate: string;
}

export interface IAuthor extends IAddAuthorRequestDTO {
	id: number;
	name: string;
	nickname: string;
	birthDate: string;
	posts: Array<IPost>;
}
