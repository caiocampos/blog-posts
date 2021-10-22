import { createContext, useContext } from 'react';
import MainStore from 'common/stores/main-store';

const storesContext = createContext<MainStore>(new MainStore());

export const useStores = (): MainStore => useContext(storesContext);
