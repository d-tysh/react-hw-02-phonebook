import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectVisibleContacts } from "redux/contacts/selectors";

export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    }

    return (
        <ul style={{'listStyle': 'none'}}>
            {
                visibleContacts.map(({ id, name, number }, i) => (
                    <li key={id} style={{'border': '1px solid grey', 'width': '350px', 'padding': '4px'}}>
                        <p>{i+1}) {name}: {number}</p>
                        <button onClick={() => deleteContactById(id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
}