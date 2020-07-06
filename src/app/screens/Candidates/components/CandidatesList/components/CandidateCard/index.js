import React from 'react';
import { string, shape } from 'prop-types';

import { USER_INFO } from './strings';

function CandidateCard({ user }) {
  return (
    <div className="box mb-0">
      <div className="level">
        <strong>{`${user.firstName} ${user.lastName}`}</strong>{' '}
        <small>{user.email}</small>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{`${USER_INFO.identification}: `}</strong>
            {user.identification}
          </li>
          <li>
            <strong>{`${USER_INFO.birthdate}: `}</strong>
            {new Date(user.birthdate).toDateString()}
          </li>
          <li>
            <strong>{`${USER_INFO.githubUser}: `}</strong>
            {user.githubUser}
          </li>
        </ul>
      </div>
    </div>
  );
}

CandidateCard.propTypes = {
  user: shape({
    firstName: string.isRequired,
    lastName: string,
    identification: string.isRequired,
    birthdate: string,
    email: string.isRequired,
    githubUser: string.isRequired
  }).isRequired
};

export default CandidateCard;
