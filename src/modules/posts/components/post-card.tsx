import { useState } from 'react';
import { Card, Popconfirm, Tooltip, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import CustomDatePicker from 'components/custom-date-picker';
import AuthorSelect from 'modules/authors/components/author-select';
import { IPost } from '../interfaces/post.interface';

const PostCard = ({
	id,
	title,
	body,
	creationDate,
	author,
	deletePost,
	...rest
}: {
	id: number;
	title: string;
	body: string;
	creationDate: string;
	author: String;
	deletePost: (id: number) => Promise<void>;
}) => {
	return (
		<Card
			{...rest}
			title={title}
			actions={[
				<Popconfirm title="Title" onConfirm={() => deletePost(id)}>
					<Tooltip title="Apagar">
						<Button type="primary" shape="circle" icon={<DeleteOutlined />} size="small" danger />
					</Tooltip>
				</Popconfirm>
			]}
			style={{ width: 300 }}
		>
			{body}
		</Card>
	);
};

export default PostCard;
