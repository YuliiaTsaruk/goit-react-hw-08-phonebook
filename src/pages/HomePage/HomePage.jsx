import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../redux/auth/authSelectors';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Text, Center, Stack, Link } from '@chakra-ui/react';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <Center>
      <Box maxW="720px" p="8" mx="auto">
        <Stack spacing="4">
          <Text fontSize="2xl" fontWeight="bold">
            {isLoggedIn ? `Hello ${userName}!` : 'Welcome to Phonebook!'}
          </Text>
          <Text fontSize="xl">
            {isLoggedIn ? (
              <>
                To view or add your contacts{' '}
                <Link
                  as={ReactRouterLink}
                  to="/contacts"
                  textDecoration="underline"
                >
                  click here
                </Link>
              </>
            ) : (
              'Please, register or log in to get access to the phonebook.'
            )}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
