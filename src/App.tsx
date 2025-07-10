import React from 'react';
import './App.css';

import Header from "./components/Header/Header"
import SitesList from './components/SitesList/SitesList';

import { useEffect } from "react"
import { Routes, Route, Link, BrowserRouter} from "react-router-dom"


const RedirectToStaticSite = () => {
  useEffect(() => {
    window.location.href = "/Sites/CleanSite/main.html";
  }, []);

  return null;
};


function App() {

  

  return (
    <div className="App">
      <Header/>
      <SitesList /> 
        {/* <Routes>
          <Route path='/' element={<App/>}/>
          <Route path="/CleanSite" element={<RedirectToStaticSite />}/>
        </Routes> */}
    </div>
  );
}

export default App;
