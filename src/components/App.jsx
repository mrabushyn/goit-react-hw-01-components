import { Profile } from './profile/Profile';
import user from './profile/user.json';

import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';

import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <p className="heders">HW1.1 'Profile'</p>
      <Profile user={user} />

      <p className="heders">HW1.2 'Statistic'</p>
      <Statistics stats={data} />

      <p className="heders">HW1.3 'FriendsList'</p>
      <FriendsList friends={friends} />

      <p className="heders">HW1.4 'Transaction'</p>
      <TransactionHistory items={transactions} />
    </div>
  );
};
