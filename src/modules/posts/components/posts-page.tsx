import { useCallback, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';
import CustomProTable, { CustomActionType } from 'components/custom-pro-table';
import EditPost from './edit-post';
import { IAddPostRequestDTO, IPost } from '../interfaces/post.interface';

const _Posts = () => {
	const { posts } = useStores();
	const ref = useRef<CustomActionType>();

	const requestPosts = useCallback(async () => {
		const postsResult = await posts.getAll();
		return {
			data: postsResult,
			success: true
		};
	}, [posts]);

	const requestNewPost = useCallback(
		async (idAuthor: number, post: IAddPostRequestDTO) => {
			await posts.create(idAuthor, post);
			ref?.current?.reload();
		},
		[posts]
	);

	const deletePost = useCallback(
		async (post: IPost) => {
			await posts.delete(post.id);
			ref?.current?.reload();
		},
		[posts]
	);

	return (
		<Layout title="Postagens">
			<CustomProTable
				ref={ref}
				headerTitle="Postagens"
				rowKey="id"
				request={requestPosts}
				columns={[]}
				toolBarRender={() => [<EditPost onSubmit={requestNewPost} key="ep" />]}
			/>
		</Layout>
	);
};

const Posts = observer(_Posts);

export default Posts;
