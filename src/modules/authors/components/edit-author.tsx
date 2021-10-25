import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Input, Button, Modal } from 'antd';
import { IAddAuthorRequestDTO } from '../interfaces/author.interface';
import CustomDatePicker from 'components/custom-date-picker';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 }
};

const _EditAuthor = ({ onSubmit }: { onSubmit: (values: IAddAuthorRequestDTO) => void }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();

	const onFinish = (valuefieldsValues: any) => {
		let values = valuefieldsValues;
		values = { ...values, birthDate: values.birthDate.format('YYYY-MM-DD') };
		onSubmit(values);
		setIsModalVisible(false);
	};

	const onReset = () => {
		form.resetFields();
	};

	const openModal = () => {
		form.resetFields();
		setIsModalVisible(true);
	};

	return (
		<>
			<Button type="primary" onClick={openModal}>
				Novo
			</Button>
			<Modal title="Novo Author" visible={isModalVisible} footer={null} onCancel={() => setIsModalVisible(false)}>
				<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
					<Form.Item name="name" label="Nome" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="nickname" label="Apelido" rules={[{ required: true }]}>
						<Input />
					</Form.Item>
					<Form.Item name="birthDate" label="Data de Nascimento" rules={[{ required: true }]}>
						<CustomDatePicker />
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

const EditAuthor = observer(_EditAuthor);

export default EditAuthor;
