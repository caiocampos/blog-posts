import { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { IAddAuthorRequestDTO } from '../interfaces/author.interface';
import CustomDatePicker from '@/components/custom-date-picker';
import { formLayout, formTailLayout, requiredRule } from '@/common/constants';
import type { Dayjs } from 'dayjs';

export interface IAuthor {
	name: string;
	nickname: string;
	birthDate: Dayjs;
}

const EditAuthor = ({
	onSubmit,
	className,
	...rest
}: {
	onSubmit: (values: IAddAuthorRequestDTO) => Promise<void>;
	className?: string;
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isInserting, setIsInserting] = useState(false);
	const [form] = Form.useForm();

	const onFinish = async (valuefieldsValues: IAuthor) => {
		setIsInserting(true);
		const values = { ...valuefieldsValues, birthDate: valuefieldsValues.birthDate.format('YYYY-MM-DD') };
		await onSubmit(values);
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
			<Modal title="Novo Author" open={isModalVisible} footer={null} onCancel={() => setIsModalVisible(false)}>
				<Form {...formLayout} form={form} name="control-hooks" onFinish={onFinish}>
					<Form.Item name="name" label="Nome" rules={requiredRule}>
						<Input />
					</Form.Item>
					<Form.Item name="nickname" label="Apelido" rules={requiredRule}>
						<Input />
					</Form.Item>
					<Form.Item name="birthDate" label="Data de Nascimento" rules={requiredRule}>
						<CustomDatePicker />
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

export default EditAuthor;
