import { useCallback, useEffect, useState } from 'react';
import { List, Button, Input } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';
import EditPost from './edit-post';
import { IAddPostRequestDTO, IPost } from '../interfaces/post.interface';
import PostCard from './post-card';
import classes from './posts-page.module.scss';

const { Search } = Input;

const _Posts = () => {
	const { posts } = useStores();
	const [isLoading, setIsLoading] = useState(false);
	const [needReload, setNeedReload] = useState(true);
	const [authorSearch, setAuthorSearch] = useState('');
	const [postList, setPostList] = useState<Array<IPost>>([]);

	const onSearch = (value: string) => {
		setAuthorSearch(value);
		setNeedReload(true);
	};

	const getPosts = useCallback(async () => await posts.getAll(authorSearch), [posts, authorSearch]);

	useEffect(() => {
		let cancel = false;
		if (needReload) {
			setIsLoading(true);
			getPosts().then((postsResult) => {
				if (!cancel) {
					setPostList(postsResult);
					setNeedReload(false);
					setIsLoading(false);
				}
			});
		}
		return () => {
			cancel = true;
		};
	}, [needReload, getPosts]);

	const requestNewPost = useCallback(
		async (idAuthor: number, post: IAddPostRequestDTO) => {
			await posts.create(idAuthor, post);
			setNeedReload(true);
		},
		[posts]
	);

	const deletePost = useCallback(
		async (id: number) => {
			await posts.delete(id);
			setNeedReload(true);
		},
		[posts]
	);

	return (
		<Layout title="Postagens" className={classes.PostsPage}>
			<List
				loading={isLoading}
				size="small"
				dataSource={postList}
				header={
					<>
						<div className={classes.HeaderInputWrapper}>
							<Search
								placeholder="Busque por autor"
								onSearch={onSearch}
								enterButton
								allowClear
								disabled={!authorSearch && postList.length === 0}
							/>
						</div>
						<div className={classes.HeaderButtonsWrapper}>
							<EditPost onSubmit={requestNewPost} />
							<Button
								type="text"
								shape="circle"
								size="middle"
								icon={<ReloadOutlined />}
								loading={isLoading}
								onClick={() => setNeedReload(true)}
							/>
						</div>
					</>
				}
				renderItem={({ id, title, body, creationDate, author }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						body={body}
						creationDate={creationDate}
						authorName={author.name}
						authorNickname={author.nickname}
						deletePost={deletePost}
					/>
				)}
			/>
		</Layout>
	);
};

const Posts = observer(_Posts);

export default Posts;
