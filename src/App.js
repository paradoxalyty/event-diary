// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import NewNote from './Pages/NewNote/NewNote';
import './App.css';

export const App = () => {
  return (
    // Since BrowserRouter is not supported on GH-Pages, I had to use HashRouter.

    // <BrowserRouter>
    //   <Switch>
    //     <Route path='/' exact component={Main} />
    //     <Route path='/new-note' component={NewNote} />
    //   </Switch>
    // </BrowserRouter>

    <HashRouter>
      <Route path='/' exact component={Main} />
      <Route path='/new-note' component={NewNote} />
    </HashRouter>
  );
};
