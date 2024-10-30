import { axiosInstance } from '@/services';
import { IAddPostRequestDTO, IPost } from './interfaces/post.interface';

export default class PostService {
	static getAll = async (author: string): Promise<Array<IPost>> => {
		const { data } = await axiosInstance.get(`/posts${author ? `?authorName=${author}` : ''}`, {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as Array<IPost>;
	};

	static create = async (idAuthor: string, post: IAddPostRequestDTO): Promise<IPost> => {
		const { data } = await axiosInstance.post(`/authors/${idAuthor}/posts`, post, {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as IPost;
	};

	static delete = async (id: string): Promise<void> => {
		await axiosInstance.delete(`/posts/${id}`);
	};
}
