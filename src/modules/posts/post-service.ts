import { axiosInstance } from 'services';
import { IAddPostRequestDTO, IPost } from './interfaces/post.interface';

export default class PostService {
	static getAll = async (): Promise<Array<IPost>> => {
		const { data } = await axiosInstance.get('/posts', {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as Array<IPost>;
	};

	static create = async (idAuthor: number, post: IAddPostRequestDTO): Promise<IPost> => {
		const { data } = await axiosInstance.post(`/authors/${idAuthor}/posts`, post, {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as IPost;
	};

	static delete = async (id: number): Promise<void> => {
		await axiosInstance.delete(`/posts/${id}`);
	};
}
