import { SearchConfig } from '@ant-design/pro-table/lib/components/Form/FormRender';

type DateFormatter = false | 'string' | 'number' | undefined;
type Search = false | SearchConfig | undefined;

export const defaultProTableProps = {
	rowKey: 'key',
	pagination: {
		showQuickJumper: true
	},
	dateFormatter: 'string' as DateFormatter,
	search: false as Search
};

export const formLayout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};

export const formTailLayout = {
	wrapperCol: { offset: 8, span: 16 }
};

export const requiredRule = [{ required: true }];
