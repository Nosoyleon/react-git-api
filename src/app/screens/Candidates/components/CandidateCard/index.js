import React from 'react';
import { string, shape } from 'prop-types';

import { USER_INFO } from './strings';

function CandidateCard({ user }) {
  return (
    <div className="box mb-0">
      <div className="level">
        <figure className="image is-32x32">
          <img src={user.avatarUrl} alt="avatar" />
        </figure>
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
            <strong>{`${USER_INFO.birthDate}: `}</strong>
            {user.birthDate}
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
    birthDate: string,
    email: string.isRequired,
    githubUser: string.isRequired,
    avatarUrl: string
  }).isRequired
};

export default CandidateCard;
