import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { fetchContacts, deleteContact, addContact } from 'redux/ApiOperations';
import {
  selectContacts,
  selectFilterQuery,
  selectIsError,
  selectIsLoading,
} from '../redux/selectors.js';

import Loader from '../components/Loader/Loader,.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import ContactForm from '../components/ContactFrom/ContactFrom.jsx';
import Filter from '../components/Filter/Filter.jsx';

const Contacts = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilterQuery);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch]);

  const formOnSubmit = (data, newContact) => {
    console.log('Form data >>> ', data);

    dispatch(addContact(newContact));
  };

  const changeFilter = e => {
    const query = e.currentTarget.value;

    dispatch({ type: 'filter/filter', payload: query });
  };

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const normalizedFilter = filterQuery.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm sendDataToApp={formOnSubmit} />
      {isError && <h1>Ops, something went wrong</h1>}
      {isLoading && <Loader />}

      {contacts.length > 0 && !isError && !isLoading ? (
        <div>
          <h2>Contacts</h2>
          <Filter changeFilter={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDelete={deleteContactById}
          />
        </div>
      ) : (
        <h1>There is no contacts yet</h1>
      )}
    </div>
  );
};

export default Contacts;
