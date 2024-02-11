import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const registerSchema = Yup.object({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  password: Yup.string()
    .min(8, 'Must be minimum 8 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions) => {
      dispatch(register(values));
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
      borderColor="teal"
      rounded="lg"
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          id="name"
          isInvalid={formik.touched.name && formik.errors.name}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            borderColor="teal"
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          id="email"
          isInvalid={formik.touched.email && formik.errors.email}
          mt="4"
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
          Sign Up
        </Button>
      </form>
    </Box>
  );
}
