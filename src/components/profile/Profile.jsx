import PropTypes from 'prop-types';
import css from './Profile.module.css'


export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  
  return (
    <div>
      <div className={css.profile}>
        <div className="description">
          <img src={avatar} alt="User avatar" className={css.avatar} />

          <p className={css.name}>{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className={css.stats}>
          <li>
            <span className={css.label}>
              Folowers
            </span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>
              Views
            </span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>
              Likes
            </span>
            <span className={css.quantity}>{stats.likes}</span>
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
