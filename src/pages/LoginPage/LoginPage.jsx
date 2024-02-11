import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const loginSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Must be minimum 8 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      dispatch(logIn(values));
      actions.resetForm();
    },
  });

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="8"
      p="6"
      borderWidth="1px"
      rounded="lg"
      borderColor="teal"
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          id="email"
          isInvalid={formik.touched.email && formik.errors.email}
        >
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            borderColor="teal"
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl
          id="password"
          isInvalid={formik.touched.password && formik.errors.password}
          mt="4"
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            borderColor="teal"
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>

        <Button
          mt="6"
          colorScheme="teal"
          size="md"
          type="submit"
          isLoading={formik.isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
}
