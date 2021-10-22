import { observer } from 'mobx-react-lite';
import { Layout } from 'components/layout';

const _Posts = () => <Layout title="Postagens">Teste Postagens</Layout>;

export const Posts = observer(_Posts);
