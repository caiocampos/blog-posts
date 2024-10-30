import { IPost } from '@/modules/posts/interfaces/post.interface';

export interface IAddAuthorRequestDTO {
	name: string;
	nickname: string;
	birthDate: string;
}

export interface IAuthor extends IAddAuthorRequestDTO {
	id: string;
	name: string;
	nickname: string;
	birthDate: string;
	posts: Array<IPost>;
}
