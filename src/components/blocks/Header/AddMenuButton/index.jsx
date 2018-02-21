import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import AddMenuButtonComponent from './AddMenuButtonComponent';

const AddMenuButton = ({ history }) => (
  <AddMenuButtonComponent addClick={() => { history.push('/tasks/new'); }} />
);

AddMenuButton.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(AddMenuButton);
