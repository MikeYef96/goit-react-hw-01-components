import React from 'react';
import css from './DescriptionProfile.module.css';

export function DescriptionProfile({ name, tag, location, avatar }) {
  return (
    <>
      <div className={css.description}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
    </>
  );
}

export function StatisticProfile({ stats }) {
  return (
    <>
      <li className={css.stat}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </>
  );
}
