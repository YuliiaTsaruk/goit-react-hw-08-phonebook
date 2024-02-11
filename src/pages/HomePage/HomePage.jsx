import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/auth/authSelectors';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return isLoggedin ? (
    <div>
      <h2>Hello {userName}!</h2>
      <p>
        To view or add your contacts <Link to="/contacts"> click here </Link>
      </p>
    </div>
  ) : (
    <div>
      <h2>Wellcome to Phonebook!</h2>
      <p>Please, Register or LogIn in order to get an access to phonebook</p>
    </div>
  );
}
