import { ReactNode, ForwardedRef, useRef, useImperativeHandle, forwardRef, Key } from 'react';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { SearchConfig } from '@ant-design/pro-table/lib/components/Form/FormRender';

export interface RequestFunctionResponse {
	data: Array<any>;
	success: boolean;
}

export interface CustomActionType {
	reload: () => void;
}

const _CustomProTable = (
	{
		columns,
		rowKey = 'key',
		request,
		toolBarRender,
		headerTitle,
		search = false,
		key,
		...rest
	}: {
		columns: Array<ProColumns>;
		rowKey?: string;
		request?: () => Promise<RequestFunctionResponse>;
		toolBarRender?: () => Array<ReactNode>;
		headerTitle?: ReactNode;
		search?: false | SearchConfig;
		key?: Key;
	},
	ref?: ForwardedRef<CustomActionType | undefined>
) => {
	const actionRef = useRef<ActionType>();
	useImperativeHandle(ref, () => ({
		reload: () => {
			actionRef?.current?.reload();
		}
	}));
	return (
		<ConfigProvider locale={ptBR} key={key}>
			<ProTable
				{...rest}
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

const CustomProTable = forwardRef(_CustomProTable);

export default CustomProTable;
