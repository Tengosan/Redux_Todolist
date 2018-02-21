import TOGGLE_FILTER from 'Constants/filters';

const toggleFilter = filterName => ({
  type: TOGGLE_FILTER,
  filterName,
});

export default toggleFilter;
