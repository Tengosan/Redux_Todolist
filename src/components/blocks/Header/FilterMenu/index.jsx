import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import toggleFilter from 'Actions/filters';
import FilterPropType from 'Proptypes/FilterPropType';
import FilterMenuComponent from './FilterMenuComponent';

const FilterMenu = ({ toggleFilterProp, filters }) => (
  <FilterMenuComponent
    toggleFilter={toggleFilterProp}
    filters={filters}
  />
);

FilterMenu.propTypes = {
  filters: PropTypes.arrayOf(FilterPropType).isRequired,
  toggleFilterProp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filtersReducer,
});

const mapDispatchToProps = dispatch => ({
  toggleFilterProp: filterName => (
    dispatch(toggleFilter(filterName))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
