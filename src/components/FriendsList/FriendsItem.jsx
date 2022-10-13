// import { HiCheckCircle } from 'react-icons/hi';
import { BsFillCircleFill } from 'react-icons/bs';

import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsItem = ({ friendData }) => {
  // const isOnline = true;
  return friendData.map(friend => (
    <li className={css.item} key={friend.id}>
      <span>
        {friend.isOnline ? (
          <BsFillCircleFill className={css.isOnline} />
        ) : (
          <BsFillCircleFill className={css.isOffline} />
        )}
      </span>

      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
};

FriendsItem.propTypes = {
  friendData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
