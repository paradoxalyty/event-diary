import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Pages/Main/Main';
import NewNote from './Pages/NewNote/NewNote';
import './App.css';

class App extends Component {
  render() {
    // const { history } = this.props;
    return (
      // Since BrowserRouter is not supported on GH-Pages, I had to use HashRouter.

      // <BrowserRouter>
      //   <Switch>
      //     <Route history={history} path='/new-note' component={NewNote} />
      //     <Route history={history} path='/event-diary' component={Main} />
      //   </Switch>
      // </BrowserRouter>

      <Router>
        <Route path='/new-note' component={NewNote} />
        <Route path='/event-diary' component={Main} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { history: state.history };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
