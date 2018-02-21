import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { withRouter } from 'react-router';

import loadTasks from 'Actions/tasks/api/loadTasks';
import TaskPropType from 'Proptypes/TaskPropType';
import getTasksBySelectedFilters from 'Selectors/tasks/getTasksBySelectedFilters';

import MatchPropType from 'Proptypes/MatchPropType';
import TasksComponent from './TasksComponent';
import Task from './Task';

class TaskListPage extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(TaskPropType).isRequired,
    isServerError: PropTypes.bool,
    loadTasks: PropTypes.func.isRequired,
    match: MatchPropType.isRequired,
  };
  static defaultProps = {
    isServerError: false,
  };
  componentDidMount() {
    this.props.loadTasks();
  }
  isSelected(taskId) {
    return Number(this.props.match.params.taskId) === taskId;
  }
  render() {
    const { tasks, isServerError } = this.props;

    return (
      <TasksComponent isServerError={isServerError}>
        {map(tasks, task => (
          <Task key={task.id} task={task} isSelected={this.isSelected(task.id)} />
        ))}
      </TasksComponent>
    );
  }
}

const mapStateToProps = state => ({
  tasks: getTasksBySelectedFilters(state),
  isServerError: state.tasksReducer.isServerError,
});

export default withRouter(connect(mapStateToProps, { loadTasks })(TaskListPage));
