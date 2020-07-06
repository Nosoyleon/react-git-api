import React from 'react';

import { TITLE } from './strings';
import CandidatesList from './components/CandidatesList';

function Candidates() {
  return (
    <div className="container mt-6">
      <h1 className="title">{TITLE}</h1>
      <CandidatesList />
    </div>
  );
}

export default Candidates;
