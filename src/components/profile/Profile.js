import React from 'react';
import { DescriptionProfile } from './descriptionProfile/DescriptionProfile';
import { StatisticProfile } from './descriptionProfile/DescriptionProfile';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <DescriptionProfile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul className={css.stats}>
        <StatisticProfile stats={stats} />
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  name: 'Profile Name',
  tag: 'tag',
  location: 'City, Country',
  avatar:
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png',
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
