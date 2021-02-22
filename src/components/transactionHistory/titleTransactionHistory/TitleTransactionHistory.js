import React from 'react';
import css from './TitleTransactionHistory.module.css';

export function TitleTransactionHistory() {
  return (
    <>
      <tr className={css.titleLabel}>
        <th className={css.label}>Type</th>
        <th className={css.label}>Amount</th>
        <th className={css.label}>Currency</th>
      </tr>
    </>
  );
}
