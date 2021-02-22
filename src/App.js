import React, { Component } from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friendList/FriendList';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';
import css from './App.module.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className={css.container}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    );
  }
}

export default App;
