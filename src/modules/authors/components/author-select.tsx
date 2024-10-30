import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import useStores from '@/common/hooks/use-stores';

interface Option {
	label: string;
	value: string;
}

const AuthorSelect = ({ onChange, ...rest }: { onChange?: (authorId: string) => void }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState<Option[]>([]);
	const {
		authors: { getAll }
	} = useStores();

	useEffect(() => {
		let cancel = false;
		setIsLoading(true);
		const getAuthors = async () => {
			const authorsResult = await getAll();
			if (!cancel) {
				setOptions(
					authorsResult.map((author) => ({ label: `${author.name} (${author.nickname})`, value: author.id }))
				);
				setIsLoading(false);
			}
		};
		getAuthors();
		return () => {
			cancel = true;
		};
	}, [getAll]);

	return <Select loading={isLoading} {...rest} options={options} onChange={onChange} />;
};

const AuthorSelectObserver = observer(AuthorSelect);

export default AuthorSelectObserver;
