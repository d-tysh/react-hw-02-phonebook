import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectVisibleContacts } from "redux/selectors";

export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    }

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