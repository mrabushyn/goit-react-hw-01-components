// import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem' 
// import friends from './FrindsList/friends.json';


export const FriendsList = ({friends}) => {
  return (
    <ul className="friend-list">
      {
        friends.map(friend => (
          <li className="item" key={friend.id}>
          <FriendsItem data={friend} /> 
          </li>
        ))
      }
      
    </ul>
  );
};


// FriendsList.propTypes = {
//   friends: PropTypes.array,
// };