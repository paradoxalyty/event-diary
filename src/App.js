import React from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import './App.css';
import './components/Modal/Modal.css';

export function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}
