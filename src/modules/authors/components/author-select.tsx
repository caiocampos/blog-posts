import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import useStores from 'common/hooks/use-stores';

interface Option {
	label: string;
	value: number;
}

const _AuthorSelect = ({ onChange, ...rest }: { onChange?: (authorId: number) => void }) => {
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
					authorsResult.map((author) => ({ label: author.nickname || author.name, value: author.id }))
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

const AuthorSelect = observer(_AuthorSelect);

export default AuthorSelect;
