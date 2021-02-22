import React from 'react';
import { StatsStatistics } from './statsStatistics/StatsStatistics.js';
import { TitleStatistics } from './titleStatistics/TitleStatistics.js';
import css from './Statistics.module.css';

export function Statistics(props) {
  return (
    <>
      <section className={css.statistics}>
        <TitleStatistics title={props.title} />
        <ul className={css.statList}>
          <StatsStatistics stats={props.stats} />
        </ul>
      </section>
    </>
  );
}

Statistics.defaultProps = {
  title: 'title name',
};
