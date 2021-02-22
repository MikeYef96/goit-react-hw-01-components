import React from 'react';
import PropTypes from 'prop-types';
import css from './History.module.css';

export function History({ items }) {
  return (
    <>
      {items.map(item => (
        <tr className={css.colum} key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </>
  );
}

History.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
