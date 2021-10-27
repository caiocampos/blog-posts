import { Card, Popconfirm, Tooltip, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import classes from './post-card.module.scss';

const PostCard = ({
	id,
	title,
	body,
	creationDate,
	authorName,
	authorNickname,
	deletePost,
	className,
	...rest
}: {
	id: number;
	title: string;
	body: string;
	creationDate: string;
	authorName: String;
	authorNickname: String;
	deletePost: (id: number) => Promise<void>;
	className?: string;
}) => (
	<Card
		{...rest}
		className={`${classes.PostCard} ${className}`}
		title={title}
		extra={
			<>
				<div>
					Autor: {authorName} ({authorNickname})
				</div>
				<div>Data: {new Date(creationDate).toLocaleDateString()}</div>
			</>
		}
		actions={[
			<Popconfirm title="Title" onConfirm={() => deletePost(id)}>
				<Tooltip title="Apagar" placement="bottom">
					<Button type="primary" icon={<DeleteOutlined />} size="small" danger>
						Apagar
					</Button>
				</Tooltip>
			</Popconfirm>
		]}
	>
		{body}
	</Card>
);

export default PostCard;
