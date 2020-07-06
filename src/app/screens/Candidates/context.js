import { createContext, useContext } from 'react';

export const CandidatesContext = createContext();

export const useCandidateContext = () => useContext(CandidatesContext);
