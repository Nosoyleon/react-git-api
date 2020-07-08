import React from 'react';
import { arrayOf, string, shape, object, bool } from 'prop-types';

function GeneralTable({ headers, data, errorMessage, loading }) {
  return (
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
      {errorMessage ? (
        <div className="notification is-danger">{errorMessage}</div>
      ) : (
        <></>
      )}
      {loading ? (
        <progress className="progress is-small is-primary" max="100" />
      ) : (
        <></>
      )}
    </>
  );
}

GeneralTable.defaultProps = {
  data: [],
  errorMessage: '',
  loading: false
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
  loading: bool
};

export default GeneralTable;
