import { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';
import EditPost from './edit-post';
import { IAddPostRequestDTO, IPost } from '../interfaces/post.interface';
import PostCard from './post-card';
import classes from './posts-page.module.scss';

const _Posts = () => {
	const { posts } = useStores();
	const [isLoading, setIsLoading] = useState(false);
	const [needReload, setNeedReload] = useState(true);
	const [postList, setPostList] = useState<Array<IPost>>([]);

	useEffect(() => {
		let cancel = false;
		if (needReload) {
			setIsLoading(true);
			const getPosts = async () => {
				const postsResult = await posts.getAll();
				if (!cancel) {
					setPostList(postsResult);
					setNeedReload(false);
					setIsLoading(false);
				}
			};
			getPosts();
		}
		return () => {
			cancel = true;
		};
	}, [posts, needReload]);

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
			<EditPost onSubmit={requestNewPost} />
			{postList.map(({ id, title, body, creationDate, author }) => (
				<PostCard
					id={id}
					title={title}
					body={body}
					creationDate={creationDate}
					author={author.nickname || author.name}
					deletePost={deletePost}
				/>
			))}
		</Layout>
	);
};

const Posts = observer(_Posts);

export default Posts;
