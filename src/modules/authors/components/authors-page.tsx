import { useCallback, useMemo, useRef } from 'react';
import ProTable from '@ant-design/pro-table';
import type { ActionType } from '@ant-design/pro-table';
import { observer } from 'mobx-react-lite';
import Layout from '@/components/layout';
import useStores from '@/common/hooks/use-stores';
import { IAddAuthorRequestDTO } from '../interfaces/author.interface';
import EditAuthor from './edit-author';
import { getAuthorColumns } from './author-columns';
import { defaultProTableProps } from '@/common/constants';

const Authors = () => {
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
		async (id: string) => {
			await authors.delete(id);
			actionRef?.current?.reload();
		},
		[authors]
	);

	const columns = useMemo(() => getAuthorColumns(deleteAuthor), [deleteAuthor]);

	return (
		<Layout title="Autores">
			<ProTable
				{...defaultProTableProps}
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

const AuthorsObserver = observer(Authors);

export default AuthorsObserver;
