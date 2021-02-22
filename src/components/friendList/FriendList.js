import React from 'react';
import { FriendItem } from './friendItem/FriendItem.js';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <FriendItem friends={friends} />
    </ul>
  );
}
