import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { Form } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const schema = Yup.object().shape({
    name: Yup.string().min(2).max(30).matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
    number: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
});

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'number':
                setNumber(e.target.value);
                break;
            default:
                return;
        }
    }

    const addNewContact = () => {
        if (!name.length && !number.length) {
            return;
        }

        if (contacts.find(item => item.name === name)) {
            alert(`${name} is already in contacts.`);
            resetForm();
            return;
        }
        
        dispatch(addContact({name, number, id: nanoid()}))
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
      }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    number: ''
                }}
                validationSchema={schema}
                onSubmit={addNewContact}
            >
                <Form>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={name}
                            required
                        />
                        <ErrorMessage name='name' />
                    </label>
                    <label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            required
                            onChange={handleChange}
                            value={number}
                        />
                        <ErrorMessage name='number' />
                    </label>
                    <button type='submit'>Add contact</button>
                </Form>
            </Formik>
        </>
    )
}