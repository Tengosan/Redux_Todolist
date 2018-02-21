import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm, change } from 'redux-form';
import { TextField, SelectField } from 'redux-form-material-ui';

import TaskPropType from 'Proptypes/TaskPropType';
import { getDue } from 'Utils/tasks';
import TaskEditFormDue from './TaskEditFormDue';
import './TaskEditForm.scss';

class TaskEditForm extends Component {
  static propTypes = {
    task: TaskPropType,
    deleteTask: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,

    initialize: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  static defaultProps = {
    task: {},
  };
  static formName = 'taskEditForm';

  constructor(props) {
    super(props);

    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.setDue = this.setDue.bind(this);
  }
  componentDidMount() {
    this.initializeProps(this.props.task);
    document.querySelectorAll("[name='name']")[0].focus();
  }
  componentWillUpdate({ task }) {
    this.initializeProps(task, task.id);
  }
  setDue(isDue, due) {
    this.props.dispatch(change(TaskEditForm.formName, 'isDue', isDue));
    this.props.dispatch(change(TaskEditForm.formName, 'due', due));
  }
  initializeProps(task, taskId) {
    if (this.props.task.id !== taskId) {
      const due = getDue(task.isDue, task.due);
      this.props.initialize({ ...task, due });
    }
  }
  handleOnDelete(e) {
    e.preventDefault();
    this.props.deleteTask();
  }


  render() {
    return (
      <form className="task-edit-form" onSubmit={this.props.handleSubmit}>
        <div className="task-edit-header">
          <div className="task-edit-header__caption">Edit Task Details</div>
          <div className="task-edit-header__menu">
            <button
              className="menu-button task-edit-header-menu__menu-button-save"
              type="submit"
            />
            <button
              className="menu-button task-edit-header-menu__menu-button-delete"
              onClick={this.handleOnDelete}
            />
          </div>
        </div>

        <div className="task-edit-content">
          <div className="task-edit-content__name">
            <Field name="name" component={TextField} type="text" placeholder="Task" style={{ width: '100%' }} />
          </div>
          <div className="task-edit-content__description">
            <Field name="description" component={TextField} type="text" placeholder="Description" style={{ width: '100%' }} />
          </div>
          <div className="task-edit-content__status">
            <Field name="status" component={SelectField} hintText="Status" style={{ width: '100%' }}>
              <MenuItem value="Not Started" primaryText="Not Started" />
              <MenuItem value="In Progress" primaryText="In Progress" />
              <MenuItem value="Done" primaryText="Done" />
            </Field>
          </div>
          <TaskEditFormDue
            setDue={this.setDue}
            taskId={this.props.task.id}
            isDue={this.props.task.isDue}
            due={this.props.task.due}
          />
          <div className="task-edit-content__done">
            <Field name="done" component={TextField} type="text" placeholder="Have not done..." disabled style={{ width: '100%' }} />
          </div>
          <div className="task-edit-content__priority">
            <Field name="priority" component={SelectField} hintText="Priority" style={{ width: '100%' }}>
              <MenuItem value="Normal" primaryText="Normal" />
              <MenuItem value="High" primaryText="High" />
              <MenuItem value="Very High" primaryText="Very High" />
            </Field>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: TaskEditForm.formName })(TaskEditForm);
