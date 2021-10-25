import { observer } from 'mobx-react-lite';
import Layout from 'components/layout';

const _Posts = () => <Layout title="Postagens">Teste Postagens</Layout>;

const Posts = observer(_Posts);

export default Posts;
