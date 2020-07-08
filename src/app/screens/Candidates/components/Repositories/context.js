import { createContext, useContext } from 'react';

export const RepositoriesContext = createContext();

export const useRepositoriesContext = () => useContext(RepositoriesContext);
