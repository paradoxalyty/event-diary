import { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadFromLocalStorage } from '../../redux/actions';

import { Header } from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import Notes from '../../components/Notes/Notes';
import { Info } from '../../components/Info/Info';

import './Main.css';

const Main = ({ localNotes, loadFromLocalStorage }) => {
  useEffect(() => {
    if (localNotes.length === 0) {
      loadFromLocalStorage();
    }
  }, [localNotes.length, loadFromLocalStorage]);
  return (
    <>
      <Header />

      <Filters />

      {localNotes.length ? <Notes /> : <Info />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    localNotes: state.localData.localNotes,
  };
};

const mapDispatchToProps = {
  loadFromLocalStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
