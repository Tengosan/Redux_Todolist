import React from 'react';

import PropTypes from 'prop-types';
import TaskPropType from 'Proptypes/TaskPropType';
import { isOverdue } from 'Utils/tasks';
import TaskComponent from './TaskComponent';


const Task = ({ task, isSelected }) => {
  const taskProps = {
    task,
    isSelected,
    isOverdue: isOverdue(task),
  };
  return <TaskComponent {...taskProps} />;
};

Task.propTypes = {
  task: TaskPropType.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Task;
