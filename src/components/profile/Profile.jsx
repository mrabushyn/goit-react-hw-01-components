import PropTypes from 'prop-types';

import {
  // classNameStyle,
  avatarStyle,
  profileStyle,
  statsStyle,
  labelStyle,
  quantityStyle,
  Name,
} from './ProfileStyle';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  
  return (
    <div>
      <div className="profile" style={profileStyle}>
        <div className="description">
          <img
            src={avatar}
            alt="User avatar"
            className="avatar"
            style={avatarStyle}
          />
          <Name>{username}</Name>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className="stats" style={statsStyle}>
          <li>
            <span className="label" style={labelStyle}>
              Folowers{' '}
            </span>
            <span className="quantity" style={quantityStyle}>
              {stats.followers}
            </span>
          </li>
          <li>
            <span className="label" style={labelStyle}>
              Views
            </span>
            <span className="quantity" style={quantityStyle}>
              {stats.views}
            </span>
          </li>
          <li>
            <span className="label" style={labelStyle}>
              Likes
            </span>
            <span className="quantity" style={quantityStyle}>
              {stats.likes}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({    
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
  }).isRequired,
};
