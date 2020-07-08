import React from 'react';
import { arrayOf, string, shape, object, bool, number, func } from 'prop-types';
import cn from 'classnames';

import { DEFAULT_RANGE } from 'app/screens/Candidates/components/Repositories/constants';
import { PREVIOUS, NEXT } from './strings';

function GeneralTable({ headers, data, errorMessage, loading, page, setPage }) {
  const pages = Array.from(Array(page).keys()).map(item => item + 1);

  return (
    <>
      {!loading && (
        <>
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                {headers.map(({ accesor, label }) => (
                  <th key={accesor}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex.toString()}>
                  {headers.map(({ accesor }, celIndex) => (
                    <td key={celIndex.toString()}>{row[accesor]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <nav
            className="pagination is-rounded mb-5 is-small"
            role="navigation"
            aria-label="pagination"
          >
            <button
              type="button"
              className="pagination-previous"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              {PREVIOUS}
            </button>
            <button
              type="button"
              className="pagination-next"
              disabled={data.length < DEFAULT_RANGE || !data.length}
              onClick={() => setPage(page + 1)}
            >
              {NEXT}
            </button>
            <ul className="pagination-list">
              {pages.map(pageNumber => (
                <li key={pageNumber}>
                  <button
                    type="button"
                    className={cn('pagination-link', {
                      'is-current': page === pageNumber
                    })}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="pagination-link"
                  disabled={data.length < DEFAULT_RANGE || !data.length}
                  onClick={() => setPage(pages.length + 1)}
                >
                  ?
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
      <div>
        {errorMessage && (
          <div className="notification is-danger">{errorMessage}</div>
        )}
      </div>
      {loading && <progress className="progress is-small is-primary" max="100" />}
    </>
  );
}

GeneralTable.defaultProps = {
  data: [],
  errorMessage: '',
  loading: false,
  page: 1
};

GeneralTable.propTypes = {
  headers: arrayOf(
    shape({
      label: string.isRequired,
      accesor: string.isRequired
    })
  ).isRequired,
  data: arrayOf(object),
  errorMessage: string,
  loading: bool,
  page: number,
  setPage: func.isRequired
};

export default GeneralTable;
