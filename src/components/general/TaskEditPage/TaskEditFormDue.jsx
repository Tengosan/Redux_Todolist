import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Checkbox } from 'redux-form-material-ui';
import moment from 'moment';
import InputMoment from 'input-moment';
import 'input-moment/dist/input-moment.css';
import { parseDate, getFormattedDate } from 'Utils/date';
import './TaskEditFormDue.scss';

class TaskEditFormDue extends Component {
  static propTypes = {
    setDue: PropTypes.func.isRequired,
    taskId: PropTypes.number,
    isDue: PropTypes.bool,
    due: PropTypes.string,
  };
  static defaultProps = {
    isDue: false,
    taskId: 0,
    due: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      isDue: false,
      dueMoment: moment(),
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentWillReceiveProps({ taskId, due, isDue }) {
    if (this.props.taskId !== taskId) {
      const dueMoment = (due !== '') ? parseDate(due) : moment();
      this.setState({
        isDue,
        dueMoment,
      });
    }
  }
  getInputMomentStyle() {
    if (this.state.isDue) {
      return {
        transform: 'none',
        position: 'static',
        visibility: 'visible',
        opacity: 1,
        transition: 'opacity 1.4s ease-in-out',
      };
    }
    return {
      transform: 'scale(0.1)',
      position: 'absolute',
      visibility: 'hidden',
      opacity: 0,
      transition: 'opacity 1.4s ease-in-out',
    };
  }
  getLabelText() {
    if (!this.state.isDue) {
      return 'Due is not defined';
    }
    const { dueMoment } = this.state;
    return dueMoment ? getFormattedDate(dueMoment) : '';
  }
  handleOnClick({ target }) {
    this.setState({ isDue: target.checked });
  }
  handleOnChange(dueMoment) {
    this.setState({ dueMoment });
    this.props.setDue(true, getFormattedDate(dueMoment));
  }

  render() {
    return (
      <div className="task-edit-content__due-wrapper">
        <div className="task-edit-content__due">
          <label htmlFor="isDue">
            <Field
              id="isDue"
              name="isDue"
              component={Checkbox}
              type="checkbox"
              onClick={this.handleOnClick}
              style={{ width: 'inherit' }}
            />
            {this.getLabelText()}
          </label>
        </div>

        <InputMoment
          style={this.getInputMomentStyle()}
          moment={this.state.dueMoment}
          onChange={this.handleOnChange}
          minStep={1}
          hourStep={1}
          prevMonthIcon="ion-ios-arrow-left"
          nextMonthIcon="ion-ios-arrow-right"
        />
      </div>
    );
  }
}

export default TaskEditFormDue;
