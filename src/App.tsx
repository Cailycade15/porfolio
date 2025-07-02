import React from 'react';
import './App.css';

import Header from "./components/Header/Header"
import SitesList from './components/SitesList/SitesList';


function App() {

  

  return (
    <div className="App">
      <Header/>
      <SitesList />
    </div>
  );
}

export default App;
