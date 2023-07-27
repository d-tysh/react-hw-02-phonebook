import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }
    )
  }

  addContact = () => {
    // e.preventDefault();

    const {contacts, name, number} = this.state;

    if (!(name.length && number.length)) {
      return;
    }

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      this.resetForm();
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }]
      }
    });
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  deleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== contactId)
    })
  }

  render() {
    const {contacts, name, number, filter} = this.state;

    const normalizeFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

    return (
      <div>
        <ContactForm  onSubmit={this.addContact} handleChange={this.handleChange} name={name} number={number} />
        <div>
          <h2>Contacts: {contacts.length ? contacts.length : 'no data'}</h2>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactList visibleContacts={visibleContacts} deleteContact={this.deleteContact} />
        </div>
      </div>
    );
  }
};
