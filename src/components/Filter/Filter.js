import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, filterContacts } from 'redux/contacts';

function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onFilter = e => dispatch(filterContacts(e.target.value));

  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Поиск по имени ..."
        onChange={onFilter}
        autoComplete="off"
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
