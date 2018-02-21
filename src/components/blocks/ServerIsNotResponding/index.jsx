import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadTasks from 'Actions/tasks/api/loadTasks';

import './ServerIsNotResponding.scss';

class ServerIsNotResponding extends Component {
  static propTypes = {
    isServerError: PropTypes.bool,
    loadTasks: PropTypes.func.isRequired,
  };
  static defaultProps = {
    isServerError: false,
  };

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 15000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    if (this.props.isServerError) {
      this.props.loadTasks();
    }
  }

  render() {
    return (
      <div className="server-is-not-responding">Server is not responding</div>
    );
  }
}

const mapStateToProps = state => ({
  isServerError: state.tasksReducer.isServerError,
});

const mapDispatchToProps = dispatch => ({
  loadTasks: () => {
    dispatch(loadTasks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIsNotResponding);
