import { IAuthorResponseDTO } from 'modules/authors/interfaces/author.interface';
import { axiosInstance } from 'services';

export default class AuthorService {
	static getAll = async (): Promise<Array<IAuthorResponseDTO>> => {
		const { data } = await axiosInstance.get('/authors', {
			headers: { 'Content-Type': 'application/json' }
		});
		return data as Array<IAuthorResponseDTO>;
	};
}
