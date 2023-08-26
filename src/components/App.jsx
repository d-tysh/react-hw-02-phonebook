import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  console.log('app');

  return (
    <div>
      <ContactForm />
      <div>
        <h2>Contacts: {contacts.length ? contacts.length : 'no data'}</h2>
        <Filter />
        {isLoading && !error && <div>Request in progress...</div>}
        <ContactList />
      </div>
    </div>
  );
};
