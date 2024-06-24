import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
  //имя фильтра на основе ключевого слова поиска
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};