import React from 'react';
import { string, func } from 'prop-types';

function Sorter({ label, toggleSort, direction, sortKey, currentSortKey }) {
  return (
    <button
      type="button"
      className="button is-fullwidth is-white"
      onClick={() => toggleSort(sortKey)}
    >
      <span className="icon is-small">
        {direction === 'desc' && currentSortKey === sortKey && (
          <i className="fas fa-sort-amount-down" />
        )}
        {direction === 'asc' && currentSortKey === sortKey && (
          <i className="fas fa-sort-amount-up" />
        )}
        {(currentSortKey !== sortKey || !direction) && <i className="fas fa-sort" />}
      </span>
      <span>{label}</span>
    </button>
  );
}

Sorter.defaultProps = {
  direction: '',
  sortKey: '',
  currentSortKey: ''
};

Sorter.propTypes = {
  label: string.isRequired,
  toggleSort: func.isRequired,
  direction: string,
  sortKey: string,
  currentSortKey: string
};

export default Sorter;
