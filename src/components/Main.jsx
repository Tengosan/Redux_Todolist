import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import 'font-awesome/css/font-awesome.css';

import HistoryPropType from 'Proptypes/HistoryPropType';
import Header from 'Components/blocks/Header';
import Footer from 'Components/blocks/Footer';
import Content from 'Components/general/Content';
import SnackbarComponent from 'Components/blocks/SnackbarComponent';

import './assets/fonts.css';
import './common/global.scss';
import './common/menu-button.scss';

class Main extends Component {
  static propTypes = {
    history: HistoryPropType.isRequired,
  };
  componentWillMount() {
    this.props.history.push('/tasks/new');
  }
  render() {
    return (
      <div>
        <Header />
        <Route path="/tasks/:taskId" component={Content} />
        <Footer />
        <SnackbarComponent />
      </div>
    );
  }
}

export default withRouter(Main);
