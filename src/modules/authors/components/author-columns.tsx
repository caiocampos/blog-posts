import { Tooltip, Button, Popconfirm } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

const baseAuthorColumns: Array<ProColumns> = [
	{
		title: 'Nome',
		dataIndex: 'name',
		key: 'name',
		search: false
	},
	{
		title: 'Apelido',
		dataIndex: 'nickname',
		key: 'nickname',
		search: false
	},
	{
		title: 'Data de Nascimento',
		dataIndex: 'birthDate',
		key: 'birthDate',
		search: false,
		renderText: (text) => new Date(text).toLocaleDateString()
	}
];

export const getAuthorColumns = (deleteAuthor: (id: string) => Promise<void>): Array<ProColumns> =>
	baseAuthorColumns.concat({
		title: 'Ações',
		key: 'actions',
		render: (_, row) => [
			<div className="cell-button-group" key="bg">
				<Popconfirm title="Title" onConfirm={() => deleteAuthor(row.id)}>
					<Tooltip title="Apagar" placement="bottom">
						<Button type="primary" shape="circle" icon={<DeleteOutlined />} size="small" danger />
					</Tooltip>
				</Popconfirm>
			</div>
		]
	});
