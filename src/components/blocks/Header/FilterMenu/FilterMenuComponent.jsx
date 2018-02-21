import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import FilterPropType from 'Proptypes/FilterPropType';
import './FilterMenuComponent.scss';

const FilterMenuComponent = ({ filters, toggleFilter }) => (
  <div className="filter-panel">
    <button className="menu-button menu-button-filter" />
    <ul className="filter-list">
      {map(filters, (filter) => {
          const filterProps = {
            key: filter.name,
            onClick: () => toggleFilter(filter.name),
            className: [
              'filter-list__item',
              filter.selected ? 'filter-list__item_selected' : '',
            ].join(' '),
          };

          return (
            <li {...filterProps}>
              <span>{filter.name}</span>
            </li>
          );
      })}
    </ul>
  </div>
);

FilterMenuComponent.propTypes = {
  filters: PropTypes.arrayOf(FilterPropType).isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default FilterMenuComponent;
