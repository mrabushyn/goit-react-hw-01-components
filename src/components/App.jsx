import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics'

import user from './profile/user.json';
import data from './statistics/data.json';



export const App = () => {
      return (
    <div>
      <p>HW1.1 'PROFILE'</p>
      <Profile user={user}></Profile>
      <p>HW1.2 'STATISTICS'</p>
      <Statistics stats={data} />
    </div>
  );
};
