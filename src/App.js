import React from 'react';
import NavBar from './Components/NavBar.js/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

import { actions, originals } from './Urls';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Actions' isSmall />
    </div>
  );
}

export default App;
