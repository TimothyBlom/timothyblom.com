import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from './Navigation';
import Home from '../Webpages/Home';
import AboutMe from '../Webpages/AboutMe';

function Header() {
  return (
    <div id="Header">
      <button>Navigation</button>
      <button>Options</button>

      <BrowserRouter>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Webpage/AboutMe' component={AboutMe}/>
        {/* <Route exact path='/Aranka' component={Aranka}/> */}
    	</BrowserRouter>
  </div>
  );
}

export default Header;