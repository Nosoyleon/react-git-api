import React from 'react';
import { CookiesProvider } from 'react-cookie';

import { TITLE } from './strings';
import CandidatesList from './components/CandidatesList';
import NewCandidate from './components/NewCandidate';

function Candidates() {
  return (
    <CookiesProvider>
      <div className="container mt-6">
        <h1 className="title">{TITLE}</h1>
        <CandidatesList />
        <br />
        <NewCandidate />
      </div>
    </CookiesProvider>
  );
}

export default Candidates;
