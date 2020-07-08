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
  const [InputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [timeOutId, setTimeOutId] = useState(null);
  useEffect(() => {
    if (selectedUser) {
      setLoading(true);
      const getEndpoint = searchText
        ? '/search/repositories'
        : `/users/${selectedUser}/repos`;
      api
        .get(getEndpoint, {
          page,
          per_page: DEFAULT_RANGE,
          ...(sortKey && {
            sort: sortKey
          }),
          ...(sortDirection && {
            direction: sortDirection
          }),
          ...(searchText && {
            q: `${searchText} in:name user:${selectedUser}`
          })
        })
        .then(result => {
          if (result.ok) {
            setTableData(searchText ? result.data.items : result.data);
            setErrorMessage('');
          } else {
            setTableData([]);
            setErrorMessage(GET_DATA_ERROR);
          }
          setLoading(false);
        });
    }
  }, [selectedUser, page, sortKey, sortDirection, searchText]);

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

  const handleOnChange = async ({ target }) => {
    setInputText(target.value);
    if (target.value.length >= 3) {
      clearTimeout(timeOutId);
      setTimeOutId(setTimeout(() => setSearchText(target.value), 475));
    } else {
      setSearchText('');
    }
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
      <div className="level">
        <h1 className="title">{`${OWNER} ${selectedUser}`}</h1>
        <div>
          <input
            className="input"
            placeholder="Buscar..."
            type="text"
            onChange={handleOnChange}
            value={InputText}
          />
        </div>
      </div>
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
