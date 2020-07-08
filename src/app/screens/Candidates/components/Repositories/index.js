import React, { useContext, useEffect, useState } from 'react';
import api from 'services/api';
import GeneralTable from 'app/components/GeneralTable';

import { CandidatesContext } from '../../context';
import { EMPTY_LIST, GET_DATA_ERROR } from './strings';
import { HEADERS, DEFAULT_RANGE } from './constants';

function Repositories() {
  const { selectedUser } = useContext(CandidatesContext);
  const [tableData, setTableData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [page] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setLoading(true);
      api
        .get(`/users/${selectedUser}/repos`, {
          page,
          per_page: DEFAULT_RANGE
        })
        .then(result => {
          if (result.ok) {
            setTableData(result.data);
          } else {
            setErrorMessage(GET_DATA_ERROR);
          }
          setLoading(false);
        });
    }
  }, [selectedUser, page]);

  return selectedUser ? (
    <GeneralTable
      headers={HEADERS}
      data={tableData}
      errorMessage={errorMessage}
      loading={loading}
    />
  ) : (
    <div className="notification">{EMPTY_LIST}</div>
  );
}

export default Repositories;
