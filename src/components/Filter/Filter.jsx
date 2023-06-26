import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es';

const Filter = ({ changeFilter }) => {
  const filterQuery = useSelector(state => state.filter);
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterQuery}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={changeFilter}
          required
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
