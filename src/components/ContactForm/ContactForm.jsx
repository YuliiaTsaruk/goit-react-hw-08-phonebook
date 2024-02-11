import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { Report } from 'notiflix';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Must contain only number - 0123456789')
    .min(5, 'Must be 5 or more')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = newContact => {
    const checkName = contacts.some(
      checkContact =>
        checkContact.name.toLocaleLowerCase() ===
        newContact.name.toLocaleLowerCase()
    );

    if (checkName) {
      Report.failure(
        'Notiflix Failure',
        `Cannot add to contacts this name: ${newContact.name} is already in contacts.`,
        'Okay'
      );
      return;
    }

    dispatch(addContact(newContact));
    toast.success('Successfully, new contact creted');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(newContact, actions) => {
        handleAddContact(newContact);
        actions.resetForm();
      }}
    >
      {formik => (
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
              id="number"
              isInvalid={formik.touched.number && formik.errors.number}
              mt="4"
            >
              <FormLabel>Number</FormLabel>
              <Input
                type="text"
                name="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                borderColor="teal"
              />
              <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
            </FormControl>

            <Button
              mt="6"
              colorScheme="teal"
              size="md"
              type="submit"
              isLoading={formik.isSubmitting}
            >
              Add contact
            </Button>
          </form>
        </Box>
      )}
    </Formik>
  );
};
