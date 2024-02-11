import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/auth/authSelectors';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Text fontWeight="bold" mr="2" color="teal">
          {userName}
        </Text>

        <Button
          colorScheme="teal"
          size="md"
          marginLeft="2"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};
