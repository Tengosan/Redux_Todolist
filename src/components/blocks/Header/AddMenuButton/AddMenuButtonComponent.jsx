import React from 'react';
import PropTypes from 'prop-types';

import './AddMenuButtonComponent.scss';

const AddMenuButtonComponent = ({ addClick }) => (
  <button
    className="menu-button menu-button-add"
    onClick={addClick}
  />
);

AddMenuButtonComponent.propTypes = {
  addClick: PropTypes.func.isRequired,
};

export default AddMenuButtonComponent;
