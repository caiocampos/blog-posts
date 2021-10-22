import { observer } from 'mobx-react-lite';
import { Layout } from 'components/layout';

const _Authors = () => <Layout title="Autores">Teste Autores</Layout>;

export const Authors = observer(_Authors);
