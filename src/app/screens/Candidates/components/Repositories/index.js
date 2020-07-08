import React, { useEffect, useState, useContext } from 'react';
import api from 'services/api';
import GeneralTable from 'app/components/GeneralTable';

import { CandidatesContext } from '../../context';
import { EMPTY_LIST, GET_DATA_ERROR, OWNER } from './strings';
import { HEADERS, DEFAULT_RANGE } from './constants';

function Repositories() {
  const { selectedUser } = useContext(CandidatesContext);
  const [tableData, setTableData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortKey, setSortKey] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setLoading(true);
      api
        .get(`/users/${selectedUser}/repos`, {
          page,
          per_page: DEFAULT_RANGE,
          ...(sortKey && {
            sort: sortKey
          }),
          ...(sortDirection && {
            direction: sortDirection
          })
        })
        .then(result => {
          if (result.ok) {
            setTableData(result.data);
            setErrorMessage('');
          } else {
            setTableData([]);
            setErrorMessage(GET_DATA_ERROR);
          }
          setLoading(false);
        });
    }
  }, [selectedUser, page, sortKey, sortDirection]);

  const toggleSort = newKey => {
    let newDirection = '';
    if (!sortDirection) {
      newDirection = 'desc';
    } else if (sortDirection === 'desc') {
      newDirection = 'asc';
    } else {
      newDirection = '';
    }

    setSortKey(newDirection ? newKey : '');
    setSortDirection(newDirection);
  };

  const headers = HEADERS.map(header => ({
    ...header,
    headerProps: {
      ...header.headerProps,
      toggleSort,
      currentSortKey: sortKey,
      direction: sortDirection
    }
  }));

  return selectedUser ? (
    <>
      <h1 className="title">{`${OWNER} ${selectedUser}`}</h1>
      <GeneralTable
        headers={headers}
        data={tableData}
        errorMessage={errorMessage}
        loading={loading}
        page={page}
        setPage={setPage}
      />
    </>
  ) : (
    <div className="notification">{EMPTY_LIST}</div>
  );
}

export default Repositories;
