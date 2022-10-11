const classNameStyle = {
  fontWeight: 1000,
  fontSize: 28,
  color: 'black',
};

export const Name = ({ children }) => {
  return (
    <p className="name" style={classNameStyle}>
      {children}
    </p>
  );
};

export const avatarStyle = {
  width: '100px',
  padding: '12px 16px',
  borderRadius: '50%',
  backgroundColor: 'tomato',
  color: 'antiquewhite',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '20px',
};

export const profileStyle = {
  width: 300,
  margin: '50px auto',
  padding: '30px 0px 0px',
  borderRadius: 10,
  backgroundColor: 'lightslategray',
  color: 'antiquewhite',
  textAlign: 'center',

};

export const statsStyle = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'space-between',
  padding: 0,
  borderTop: '1px solid',
  backgroundColor: 'lightgray',
};

export const labelStyle = {
  display: 'flex',
  listStyle: 'none',
  padding: '15px 10px 0px',
  color: 'black',
};

export const quantityStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '15px 10px',
  // borderRadius: 10,
  // backgroundColor: 'grey',
  fontWeight: 800,
  color: 'black',
};
