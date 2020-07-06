import React from 'react';

import CandidateCard from './components/CandidateCard';

import styles from './styles.module.scss';
import { EMPTY_LIST } from './strings';

function CandidatesList() {
  const list = [];
  return (
    <div className={styles.listContainer}>
      {list.length ? (
        list.map((user) => <CandidateCard key={user.githubUser} user={user} />)
      ) : (
        <div className="notification">{EMPTY_LIST}</div>
      )}
    </div>
  );
}

export default CandidatesList;
