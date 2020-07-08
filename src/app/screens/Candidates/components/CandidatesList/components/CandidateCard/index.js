import React, { useContext } from 'react';
import { string, shape } from 'prop-types';
import cn from 'classnames';
import { CandidatesContext } from 'app/screens/Candidates/context';

import { USER_INFO } from './strings';
import styles from './styles.module.scss';

function CandidateCard({ user }) {
  const { selectedUser, setSelectedUser } = useContext(CandidatesContext);

  const selectUser = () => {
    setSelectedUser(user.githubUser);
  };

  return (
    <button
      type="button"
      className={cn(`${styles.buttonContainer} box mb-0`, {
        [styles.selected]: user.githubUser === selectedUser
      })}
      onClick={selectUser}
    >
      <div className={`level ${styles.cardHeader}`}>
        <strong>{`${user.firstName} ${user.lastName} `}</strong>
        <small>{user.email}</small>
      </div>
      <div className="content has-text-justified">
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
    </button>
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
