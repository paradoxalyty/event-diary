import { Header } from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import Notes from '../../components/Notes/Notes';

import './Main.css';

export const Main = () => {
  return (
    <>
      <Header />

      <Filters />

      <Notes />
    </>
  );
};
