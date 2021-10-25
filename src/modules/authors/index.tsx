import { observer } from 'mobx-react-lite';
import Layout from 'components/layout';
import useStores from 'common/hooks/use-stores';

const _Authors = () => {
	const { authors } = useStores();
	return <Layout title="Autores">Teste Autores</Layout>;
};

const Authors = observer(_Authors);

export default Authors;
