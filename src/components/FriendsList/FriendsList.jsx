import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem' 
import css from './FriendsList.module.css';



export const FriendsList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      <FriendsItem friendData={friends} />
    </ul>
  );
};


FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};