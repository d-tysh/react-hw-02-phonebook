import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || []);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    switch(e.target.name) {
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

  const addContact = () => {
    if (!(name.length && number.length)) {
      return;
    }

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    }

    setContacts(prevContacts => [...prevContacts, { id: nanoid(), name, number }]);
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

  const changeFilter = (e) => {
    setFilter(e.target.value);
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(item => item.id !== contactId));
  }

  const normalizeFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

  return (
    <div>
      <ContactForm  onSubmit={addContact} handleChange={handleChange} name={name} number={number} />
      <div>
        <h2>Contacts: {contacts.length ? contacts.length : 'no data'}</h2>
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList visibleContacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};
