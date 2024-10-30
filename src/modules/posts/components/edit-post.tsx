import { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { IAddPostRequestDTO } from '../interfaces/post.interface';
import AuthorSelect from '@/modules/authors/components/author-select';
import { formLayout, formTailLayout, requiredRule } from '@/common/constants';

const { TextArea } = Input;

export interface IPost {
	author: string
	title: string;
	body: string;
}

const EditPost = ({
	onSubmit,
	className,
	...rest
}: {
	onSubmit: (idAuthor: string, post: IAddPostRequestDTO) => Promise<void>;
	className?: string;
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isInserting, setIsInserting] = useState(false);
	const [form] = Form.useForm();

	const onFinish = async (valuefieldsValues: IPost) => {
		setIsInserting(true);
		const values = { title: valuefieldsValues.title, body: valuefieldsValues.body };
		await onSubmit(valuefieldsValues.author, values);
		setIsInserting(false);
		setIsModalVisible(false);
	};

	const onReset = () => {
		form.resetFields();
	};

	const openModal = () => {
		form.resetFields();
		setIsInserting(false);
		setIsModalVisible(true);
	};

	return (
		<>
			<Button type="primary" onClick={openModal} icon={<PlusOutlined />} className={className} {...rest}>
				Novo
			</Button>
			<Modal
				title="Nova Postagem"
				open={isModalVisible}
				footer={null}
				onCancel={() => setIsModalVisible(false)}
			>
				<Form {...formLayout} form={form} name="control-hooks" onFinish={onFinish}>
					<Form.Item name="title" label="Título" rules={requiredRule}>
						<Input />
					</Form.Item>
					<Form.Item name="body" label="Texto" rules={requiredRule}>
						<TextArea />
					</Form.Item>
					<Form.Item name="author" label="Autor" rules={requiredRule}>
						<AuthorSelect />
					</Form.Item>
					<Form.Item {...formTailLayout}>
						<Button type="primary" htmlType="submit" loading={isInserting}>
							Criar
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Limpar
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default EditPost;
