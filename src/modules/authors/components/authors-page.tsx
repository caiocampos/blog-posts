import { useCallback, useMemo, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';
import CustomProTable, { CustomActionType } from 'components/custom-pro-table';
import { IAddAuthorRequestDTO, IAuthor } from '../interfaces/author.interface';
import EditAuthor from './edit-author';
import { getAuthorColumns } from './author-columns';

const _Authors = () => {
	const { authors } = useStores();
	const ref = useRef<CustomActionType>();

	const requestAuthors = useCallback(async () => {
		const authorsResult = await authors.getAll();
		return {
			data: authorsResult,
			success: true
		};
	}, [authors]);

	const requestNewAuthor = useCallback(
		async (values: IAddAuthorRequestDTO) => {
			await authors.create(values);
			ref?.current?.reload();
		},
		[authors]
	);

	const deleteAuthor = useCallback(
		async (id: number) => {
			await authors.delete(id);
			ref?.current?.reload();
		},
		[authors]
	);

	const columns = useMemo(() => getAuthorColumns(deleteAuthor), [deleteAuthor]);

	return (
		<Layout title="Autores">
			<CustomProTable
				ref={ref}
				headerTitle="Autores"
				rowKey="id"
				request={requestAuthors}
				columns={columns}
				toolBarRender={() => [<EditAuthor onSubmit={requestNewAuthor} key="ea" />]}
			/>
		</Layout>
	);
};

const Authors = observer(_Authors);

export default Authors;
