import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import { hideSnackbar } from 'Actions/snackbar';

class SnackbarComponent extends Component {
  static propTypes = {
    snackbar: PropTypes.shape({
      state: PropTypes.bool,
      message: PropTypes.string,
    }).isRequired,
    hideSnackbar: PropTypes.func.isRequired,
  };
  handleSnackbarClose() {
    this.props.hideSnackbar();
  }
  render() {
    const { snackbar } = this.props;
    return (
      <Snackbar
        open={snackbar.state}
        message={snackbar.message}
        autoHideDuration={3000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}

const mapStateToProps = state => ({
  snackbar: state.snackbarReducer,
});

const mapDispatchToProps = dispatch => ({
  hideSnackbar: () => {
    dispatch(hideSnackbar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarComponent);
