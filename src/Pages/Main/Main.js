import React from 'react';

import { Header } from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Notes from '../../components/Notes/Notes';

import './Main.css';

const Main = () => {
  return (
    <>
      <Header />

      <Nav />

      <Notes />
    </>
  );
};

export default Main;
