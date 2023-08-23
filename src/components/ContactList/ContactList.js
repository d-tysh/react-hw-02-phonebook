import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    }

    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

    return (
        <ul style={{'listStyle': 'none'}}>
            {
                visibleContacts.map(({ id, name, number }) => (
                    <li key={id} style={{'border': '1px solid grey', 'width': '250px', 'padding': '4px'}}>
                        <p>{name}: {number}</p>
                        <button onClick={() => deleteContactById(id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
}