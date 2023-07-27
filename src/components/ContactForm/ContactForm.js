import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Form } from './ContactForm.styled';

const schema = Yup.object().shape({
    name: Yup.string().min(2).max(30).matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
    number: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
});

export const ContactForm = ({ onSubmit, handleChange, name, number }) => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    number: ''
                }}
                validationSchema={schema}
                onSubmit={onSubmit}
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