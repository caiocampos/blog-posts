import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/common/hooks/use-stores';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Option {
	label: string;
	value: string;
}

const AuthorSelect = ({ value, onValueChange }: { value?: string; onValueChange?: (authorId: string) => void }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState<Option[]>([]);
	const {
		authors: { getAll }
	} = useStores();

	useEffect(() => {
		let cancel = false;
		// eslint-disable-next-line react-hooks/set-state-in-effect -- initial data fetch on mount
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

	return (
		<Select value={value} onValueChange={(newValue) => onValueChange?.(newValue as string)}>
			<SelectTrigger>
				<SelectValue placeholder={isLoading ? 'Carregando...' : 'Selecione um autor'} />
			</SelectTrigger>
			<SelectContent>
				{options.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

const AuthorSelectObserver = observer(AuthorSelect);

export default AuthorSelectObserver;
