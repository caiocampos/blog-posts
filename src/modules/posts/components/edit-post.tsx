import { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IAddPostRequestDTO } from '../interfaces/post.interface';
import CustomDatePicker from 'components/custom-date-picker';
import AuthorSelect from 'modules/authors/components/author-select';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 }
};

const requiredRule = [{ required: true }];

const EditPost = ({ onSubmit }: { onSubmit: (idAuthor: number, post: IAddPostRequestDTO) => Promise<void> }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isInserting, setIsInserting] = useState(false);
	const [form] = Form.useForm();

	const onFinish = async (valuefieldsValues: any) => {
		setIsInserting(true);
		let values = valuefieldsValues;
		values = { ...values, birthDate: values.birthDate.format('YYYY-MM-DD') };
		await onSubmit(1, values);
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
			<Button type="primary" onClick={openModal} icon={<PlusOutlined />}>
				Novo
			</Button>
			<Modal
				title="Nova Postagem"
				visible={isModalVisible}
				footer={null}
				onCancel={() => setIsModalVisible(false)}
			>
				<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
					<Form.Item name="name" label="Nome" rules={requiredRule}>
						<Input />
					</Form.Item>
					<Form.Item name="author" label="Autor" rules={requiredRule}>
						<AuthorSelect onChange={(id) => console.log(id)}/>
					</Form.Item>
					<Form.Item name="nickname" label="Apelido" rules={requiredRule}>
						<Input />
					</Form.Item>
					<Form.Item name="birthDate" label="Data de Nascimento" rules={requiredRule}>
						<CustomDatePicker />
					</Form.Item>
					<Form.Item {...tailLayout}>
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
