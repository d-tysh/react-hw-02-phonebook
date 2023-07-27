export const ContactList = ({visibleContacts, deleteContact}) => {
    return (
        <ul style={{'listStyle': 'none'}}>
            {
                visibleContacts.map(({ id, name, number }) => (
                    <li key={id} style={{'border': '1px solid grey', 'width': '250px', 'padding': '4px'}}>
                        <p>{name}: {number}</p>
                        <button onClick={() => deleteContact(id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
}