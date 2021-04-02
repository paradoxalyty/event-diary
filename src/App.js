import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Notes } from './components/Notes/Notes';
// import { AddNote } from './components/AddNote/AddNote';
import './App.css';

export class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route history={history} path='/notes' component={Notes} />
          {/* <Route history={history} path='/add-note' component={AddNote} /> */}
          <Route history={history} path='/add-note'>
            It's add-note
          </Route>
          <Redirect from='/' to='/notes' />
        </Switch>
      </BrowserRouter>
    );
  }
}
