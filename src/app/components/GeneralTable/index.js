import React from 'react';
import { arrayOf, string, shape, object } from 'prop-types';

function GeneralTable({ headers, data }) {
  return (
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
  );
}

GeneralTable.defaultProps = {
  data: []
};

GeneralTable.propTypes = {
  headers: arrayOf(
    shape({
      label: string.isRequired,
      accesor: string.isRequired
    })
  ).isRequired,
  data: arrayOf(object)
};

export default GeneralTable;
