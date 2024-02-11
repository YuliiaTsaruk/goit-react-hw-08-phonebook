import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ButtonGroup gap="2">
        <Button as={NavLink} colorScheme="teal" size="md" to="/">
          Home
        </Button>
        {isLoggedIn && (
          <Button as={NavLink} colorScheme="teal" size="md" to="/contacts">
            Phonebook
          </Button>
        )}
      </ButtonGroup>{' '}
    </nav>
  );
};
