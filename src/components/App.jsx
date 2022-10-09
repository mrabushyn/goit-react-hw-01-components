import { Profile } from './profile/Profile';
import user from './profile/user.json';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
    </div>
  );
};
