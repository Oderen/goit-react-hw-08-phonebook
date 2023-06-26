import PropTypes from 'prop-types';

export default function Contact({ contacts, onDelete }) {
  return contacts
    .sort((a, b) => b.id - a.id)
    .map(({ id, name, phone }) => (
      <li key={id}>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ));
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
