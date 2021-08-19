import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import initStore from './redux/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={initStore}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('app-root')
);
