import { ProColumns } from '@ant-design/pro-table';

const authorsColumns: ProColumns[] = [
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

export default authorsColumns;
