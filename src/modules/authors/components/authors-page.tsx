import { useCallback, useMemo, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Tooltip, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';
import CustomProTable from 'components/custom-pro-table';
import authorsColumns from './authors-columns';
import { IAddAuthorRequestDTO, IAuthor } from '../interfaces/author.interface';
import { ActionType } from '@ant-design/pro-table';
import EditAuthor from './edit-author';

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

	const columns = useMemo(() => {
		const deleteItem = async (author: IAuthor) => {
			await authors.delete(author.id);
			actionRef?.current?.reload();
		};

		return authorsColumns.concat({
			title: 'Ações',
			key: 'actions',
			render: (_, row) => [
				<div className="cell-button-group" key="bg">
					<Popconfirm title="Title" onConfirm={() => deleteItem(row as IAuthor)}>
						<Tooltip title="Apagar">
							<Button type="primary" shape="circle" icon={<DeleteOutlined />} size="small" danger />
						</Tooltip>
					</Popconfirm>
				</div>
			]
		});
	}, [authors]);

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
