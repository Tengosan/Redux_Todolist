import React from 'react';
import PropTypes from 'prop-types';

import ServerIsNotResponding from 'Components/blocks/ServerIsNotResponding';
import './TasksComponent.scss';

const TasksComponent = ({ isServerError, children }) => (
  <div className="task-list">
    {!isServerError ? children : <ServerIsNotResponding /> }
  </div>
);

TasksComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isServerError: PropTypes.bool.isRequired,
};

export default TasksComponent;
