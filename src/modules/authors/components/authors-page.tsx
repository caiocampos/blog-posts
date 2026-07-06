import { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { RefreshCw, Trash2 } from 'lucide-react';
import Layout from '@/components/layout';
import useStores from '@/common/hooks/use-stores';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { IAddAuthorRequestDTO, IAuthor } from '../interfaces/author.interface';
import EditAuthor from './edit-author';

const Authors = () => {
	const { authors } = useStores();
	const [isLoading, setIsLoading] = useState(false);
	const [authorList, setAuthorList] = useState<Array<IAuthor>>([]);

	const loadAuthors = useCallback(async () => {
		setIsLoading(true);
		const authorsResult = await authors.getAll();
		setAuthorList(authorsResult);
		setIsLoading(false);
	}, [authors]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect -- initial data fetch on mount
		loadAuthors();
	}, [loadAuthors]);

	const requestNewAuthor = useCallback(
		async (values: IAddAuthorRequestDTO) => {
			await authors.create(values);
			await loadAuthors();
		},
		[authors, loadAuthors]
	);

	const deleteAuthor = useCallback(
		async (id: string) => {
			await authors.delete(id);
			await loadAuthors();
		},
		[authors, loadAuthors]
	);

	return (
		<Layout title="Autores">
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold">Autores</h2>
					<div className="flex items-center gap-2">
						<EditAuthor onSubmit={requestNewAuthor} />
						<Button variant="outline" size="icon" loading={isLoading} onClick={() => loadAuthors()}>
							<RefreshCw />
						</Button>
					</div>
				</div>
				<div className="rounded-lg border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Nome</TableHead>
								<TableHead>Apelido</TableHead>
								<TableHead>Data de Nascimento</TableHead>
								<TableHead className="w-24 text-right">Ações</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{authorList.length === 0 && !isLoading && (
								<TableRow>
									<TableCell colSpan={4} className="text-muted-foreground text-center">
										Nenhum autor cadastrado.
									</TableCell>
								</TableRow>
							)}
							{authorList.map((author) => (
								<TableRow key={author.id}>
									<TableCell>{author.name}</TableCell>
									<TableCell>{author.nickname}</TableCell>
									<TableCell>{new Date(author.birthDate).toLocaleDateString()}</TableCell>
									<TableCell className="text-right">
										<TooltipProvider>
											<AlertDialog>
												<Tooltip>
													<TooltipTrigger
														render={
															<AlertDialogTrigger
																render={
																	<Button variant="destructive" size="icon">
																		<Trash2 />
																	</Button>
																}
															/>
														}
													/>
													<TooltipContent>Apagar</TooltipContent>
												</Tooltip>
												<AlertDialogContent>
													<AlertDialogHeader>
														<AlertDialogTitle>Apagar autor</AlertDialogTitle>
														<AlertDialogDescription>
															Tem certeza que deseja apagar {author.name}? Essa ação
															também apagará todas as postagens desse autor e não pode ser
															desfeita.
														</AlertDialogDescription>
													</AlertDialogHeader>
													<AlertDialogFooter>
														<AlertDialogCancel>Cancelar</AlertDialogCancel>
														<AlertDialogAction onClick={() => deleteAuthor(author.id)}>
															Apagar
														</AlertDialogAction>
													</AlertDialogFooter>
												</AlertDialogContent>
											</AlertDialog>
										</TooltipProvider>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</Layout>
	);
};

const AuthorsObserver = observer(Authors);

export default AuthorsObserver;
