import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics(props) {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>{props.title}</h2>
        <ul className={css.statList}>
          {props.stats.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

Statistics.defaultProps = {
  title: 'title name',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
