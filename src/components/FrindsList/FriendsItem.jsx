// import PropTypes from 'prop-types';

export const FriendsItem = ({ data: { avatar, name }}) => {
  // const isOnline = true;
  return (
    <div>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
};
    


// FriendsItem.propTypes = {
//   friends: PropTypes.array,
// }; 