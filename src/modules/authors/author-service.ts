import { IAddAuthorRequestDTO, IAuthor } from '@/modules/authors/interfaces/author.interface';
import { axiosInstance } from '@/services';

export default class AuthorService {
	static getAll = async (): Promise<Array<IAuthor>> => {
		const { data } = await axiosInstance.get('/authors', {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as Array<IAuthor>;
	};

	static create = async (author: IAddAuthorRequestDTO): Promise<IAuthor> => {
		const { data } = await axiosInstance.post('/authors', author, {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as IAuthor;
	};

	static delete = async (id: string): Promise<void> => {
		await axiosInstance.delete(`/authors/${id}`);
	};
}
