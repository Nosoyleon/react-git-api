import React, { useState } from 'react';
import { CookiesProvider } from 'react-cookie';

import { TITLE } from './strings';
import CandidatesList from './components/CandidatesList';
import NewCandidate from './components/NewCandidate';
import { CandidatesContext } from './context';

function Candidates() {
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <CandidatesContext.Provider value={{selectedUser, setSelectedUser}}>
      <CookiesProvider>
        <div className="container mt-6">
          <h1 className="title">{TITLE}</h1>
          <CandidatesList />
          <br />
          <NewCandidate />
        </div>
      </CookiesProvider>
    </CandidatesContext.Provider>
  );
}

export default Candidates;
