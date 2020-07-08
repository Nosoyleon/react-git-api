import React from 'react';
import { string, func } from 'prop-types';

function Sorter({ label, toggleDirection, direction }) {
  return (
    <button
      type="button"
      className="button is-fullwidth is-white"
      onClick={toggleDirection}
    >
      <span className="icon is-small">
        {direction === 'desc' && <i className="fas fa-sort-amount-down" />}
        {direction === 'asc' && <i className="fas fa-sort-amount-up" />}
      </span>
      <span>{label}</span>
    </button>
  );
}

Sorter.defaultProps = {
  direction: 'desc'
};

Sorter.propTypes = {
  label: string.isRequired,
  toggleDirection: func.isRequired,
  direction: string
};

export default Sorter;
