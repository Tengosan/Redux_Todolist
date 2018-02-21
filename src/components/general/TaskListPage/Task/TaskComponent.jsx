import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TaskPropType from 'Proptypes/TaskPropType';
import './TaskComponent.scss';

const TaskComponent = ({ task, isOverdue, isSelected }) => {
  const selectedTaskClassName = isSelected ? 'task-item_selected' : '';
  const doneCheckboxClassName = task.done ? 'fa-check-square-o' : 'fa-square-o';

  const doneStatusClassName = task.done ? 'task-item-container__status_done' : '';
  const overDueStatusClassName = isOverdue ? 'task-item-container__status_overdue' : '';

  return (
    <Link to={`/tasks/${task.id}`} className={['task-item', selectedTaskClassName].join(' ')}>
      <div className="task-item__checkbox">
        <i className={['fa', doneCheckboxClassName].join(' ')} />
      </div>

      <div className="task-item-container">
        <div>
          <div className={['task-item-container__caption'].join(' ')}>
            <span>{task.name}</span>
          </div>
          <div className={['task-item-container__date'].join(' ')}>
            <span>{task.done || (task.isDue && task.due)}</span>
          </div>
        </div>
        <div>
          <div className="task-item-container__status">
            <span>
              Status:&nbsp;
              <i className={doneStatusClassName}>
                {task.status}
              </i>
              {isOverdue ? ' ' : ''}
              <i className={overDueStatusClassName}>
                {isOverdue ? 'Overdue' : ''}
              </i>
            </span>
          </div>
          <div className="task-item-container__priority">
            <span>priority: {task.priority}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

TaskComponent.propTypes = {
  task: TaskPropType,
  isOverdue: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

TaskComponent.defaultProps = {
  task: {},
};

export default TaskComponent;
