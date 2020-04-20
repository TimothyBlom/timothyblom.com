import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './Styles/style.css';
import Header from "./Components/Header";
import AboutMe from "./Webpages/AboutMe";
import Home from './Webpages/Home';
import dedicatedArt from './Webpages/dedicatedArt';
import MediaBars from "./Components/SocialmediaBars";
import BackgroundLines from "./Components/BackgroundLines";
import ScrollBar from "./Components/ScrollBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MediaBars />
      <ScrollBar />
      <BackgroundLines />
      <Route exact path='/' component={Home}/>
      <Route exact path='/AboutMe' component={AboutMe}/>
      <Route exact path='/dedicatedArt' component={dedicatedArt}/>
    </BrowserRouter>
  );
}

export default App;