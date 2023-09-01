import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "redux/contacts/operations"
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors"

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <div>
                <h2>Contacts: {contacts.length ? contacts.length : 'no data'}</h2>
                <Filter />
                {isLoading && !error && <div>Request in progress...</div>}
                <ContactList />
            </div>
        </>
    )
}