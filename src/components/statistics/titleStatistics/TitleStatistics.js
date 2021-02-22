import React from 'react';
import css from './TitleStatistics.module.css';

export function TitleStatistics({ title }) {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
    </>
  );
}
