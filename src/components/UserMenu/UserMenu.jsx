import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logOut);
  };

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
