import React from 'react';
import PropTypes from 'prop-types';
import css from './StatsStatistics.module.css';

export function StatsStatistics({ stats }) {
  return stats.map(stat => (
    <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>
  ));
}

StatsStatistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
