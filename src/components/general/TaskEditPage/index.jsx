import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import TaskPropType from 'Proptypes/TaskPropType';
import HistoryPropType from 'Proptypes/HistoryPropType';

import addTask from 'Actions/tasks/api/addTask';
import saveTask from 'Actions/tasks/api/saveTask';
import deleteTask from 'Actions/tasks/api/deleteTask';
import tasksSelector from 'Selectors/tasks/tasksSelector';
import newTaskSelector from 'Selectors/tasks/newTaskSelector';

import { getNowFormatted } from 'Utils/date';
import { getTaskById } from 'Utils/tasks';

import TaskEditForm from './TaskEditForm';

class TaskEditPage extends Component {
  static propTypes = {
    saveTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(TaskPropType).isRequired,
    newTask: TaskPropType.isRequired,
    match: PropTypes.shape({}).isRequired,
    history: HistoryPropType.isRequired,
  };
  constructor(props) {
    super(props);
    this.saveTask = this.saveTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  componentWillReceiveProps({ match }) {
    if (!match || !match.params.taskId) {
      return;
    }

    if (match.params.taskId === 'new') {
      this.task = this.props.newTask;
      return;
    }

    const taskId = Number(match.params.taskId);
    if (this.task && this.task.id === taskId) {
      return;
    }

    const task = getTaskById(this.props.tasks, taskId);
    if (task !== null) {
      this.task = task;
    }
  }
  saveTask(task) {
    const taskChanged = { ...task };
    taskChanged.done = (taskChanged.status === 'Done') ? getNowFormatted() : '';
    delete taskChanged.selected;

    if (taskChanged.isNew) {
      delete taskChanged.isNew;
      this.props.addTask(taskChanged);
      this.goToNewTask();
      return;
    }

    this.props.saveTask(taskChanged);
  }
  deleteTask() {
    if (!this.task.isNew) {
      this.props.deleteTask(this.task);
    }
    this.goToNewTask();
  }
  goToNewTask() {
    this.props.history.push('/tasks/new');
  }
  render() {
    const props = {
      task: this.task,
      onSubmit: this.saveTask,
      deleteTask: this.deleteTask,
    };
    return (
      <TaskEditForm {...props} />
    );
  }
}

const mapStateToProps = state => ({
  tasks: tasksSelector(state),
  newTask: newTaskSelector(state),
});

export default withRouter(connect(mapStateToProps, {
  saveTask,
  addTask,
  deleteTask,
})(TaskEditPage));
