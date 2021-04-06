import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Notes } from './components/Notes/Notes';
import { NewNote } from './components/NewNote/NewNote';
import './App.css';

export class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { history } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route history={history} path='/notes' component={Notes} />
          <Route history={history} path='/new-note' component={NewNote} />
          <Redirect from='/' to='/notes' />
        </Switch>
      </BrowserRouter>
    );
  }
}
