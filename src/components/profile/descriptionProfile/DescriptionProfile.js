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
