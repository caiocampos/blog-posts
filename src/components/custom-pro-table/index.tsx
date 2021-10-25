import { ReactNode, MutableRefObject } from 'react';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { SearchConfig } from '@ant-design/pro-table/lib/components/Form/FormRender';

export interface RequestFunctionResponse {
	data: Array<any>;
	success: boolean;
}

const CustomProTable = ({
	columns,
	rowKey = 'key',
	request,
	toolBarRender,
	headerTitle,
	search = false,
	actionRef
}: {
	columns: Array<ProColumns>;
	rowKey?: string;
	request?: () => Promise<RequestFunctionResponse>;
	toolBarRender?: () => Array<ReactNode>;
	headerTitle?: ReactNode;
	search?: false | SearchConfig;
	actionRef?: MutableRefObject<ActionType | undefined>;
}) => {
	return (
		<ConfigProvider locale={ptBR}>
			<ProTable
				columns={columns}
				request={request}
				rowKey={rowKey}
				pagination={{
					showQuickJumper: true
				}}
				dateFormatter="string"
				search={search}
				toolBarRender={toolBarRender}
				headerTitle={headerTitle}
				actionRef={actionRef}
			/>
		</ConfigProvider>
	);
};

export default CustomProTable;
