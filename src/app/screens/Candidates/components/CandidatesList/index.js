import React from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import CandidateCard from './components/CandidateCard';

import styles from './styles.module.scss';
import { EMPTY_LIST } from './strings';

function CandidatesList({ cookies }) {
  return (
    <div className={styles.listContainer}>
      {cookies.get('candidates')?.length ? (
        cookies
          .get('candidates')
          .map(user => <CandidateCard key={user.githubUser} user={user} />)
      ) : (
        <div className="notification">{EMPTY_LIST}</div>
      )}
    </div>
  );
}

CandidatesList.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(CandidatesList);
