import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectContacts, selectFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    }

    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

    return (
        <ul style={{'listStyle': 'none'}}>
            {
                visibleContacts.map(({ id, name, phone }, i) => (
                    <li key={id} style={{'border': '1px solid grey', 'width': '350px', 'padding': '4px'}}>
                        <p>{i+1}) {name}: {phone}</p>
                        <button onClick={() => deleteContactById(id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
}