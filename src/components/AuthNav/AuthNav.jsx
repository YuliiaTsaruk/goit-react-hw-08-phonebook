import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button, Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex justifyContent="end">
      <ButtonGroup gap="2">
        <Button colorScheme="teal" size="md">
          <NavLink to="/register">Register</NavLink>
        </Button>
        <Button colorScheme="teal" size="md">
          <NavLink to="/login">Log In</NavLink>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
