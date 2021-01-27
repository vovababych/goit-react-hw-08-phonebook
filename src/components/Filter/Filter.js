import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'redux/contacts';

function Filter() {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const onFilter = e => dispatch(actions.filterContacts(e.target.value));

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
