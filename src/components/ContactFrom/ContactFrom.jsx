import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux/es';
import { selectContacts } from '../../redux/selectors';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const ContactForm = ({ sendDataToApp }) => {
  const contacts = useSelector(selectContacts);

  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;

    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    if (onDuplicateCheck(contact.name)) {
      e.currentTarget.reset();
      // name.focus() || number.focus()
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    }

    sendDataToApp({ name: name.value, number: number.value }, contact);
    reset();
  };

  const onDuplicateCheck = name => {
    const newContactName = name.toLowerCase();

    return contacts.some(
      contact => contact.name.toLowerCase() === newContactName
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="^[+]?[0-9\s]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  sendDataToApp: PropTypes.func.isRequired,
};
