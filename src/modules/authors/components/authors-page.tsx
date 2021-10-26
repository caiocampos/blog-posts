import { useCallback, useMemo, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { ActionType } from '@ant-design/pro-table';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';
import CustomProTable from 'components/custom-pro-table';
import { IAddAuthorRequestDTO, IAuthor } from '../interfaces/author.interface';
import EditAuthor from './edit-author';
import { getAuthorColumns } from './author-columns';

const _Authors = () => {
	const { authors } = useStores();
	const actionRef = useRef<ActionType>();

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
			actionRef?.current?.reload();
		},
		[authors]
	);

	const deleteAuthor = useCallback(
		async (author: IAuthor) => {
			await authors.delete(author.id);
			actionRef?.current?.reload();
		},
		[authors]
	);

	const columns = useMemo(() => getAuthorColumns(deleteAuthor), [deleteAuthor]);

	return (
		<Layout title="Autores">
			<CustomProTable
				actionRef={actionRef}
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
