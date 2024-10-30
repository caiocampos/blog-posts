import { createContext, useContext } from 'react';
import MainStore from '@/common/stores/main-store';

const storesContext = createContext<MainStore>(new MainStore());

const useStores = (): MainStore => useContext(storesContext);

export default useStores;
