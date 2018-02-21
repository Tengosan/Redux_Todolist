import PropTypes from 'prop-types';

const FilterPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
});

export default FilterPropType;
