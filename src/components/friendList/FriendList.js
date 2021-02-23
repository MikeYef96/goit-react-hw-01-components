import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            <span className={friend.isOnline ? css.online : css.offline}></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="50"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.defaultProps = {
  name: 'user name',
  avatar:
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};
