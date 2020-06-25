import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter, Route} from "react-router-dom";
import './Styles/style.css';
import Header from "./Components/Header";
import Intro from './Webpages/Intro';
import AboutMe from "./Webpages/AboutMe";
import Home from './Webpages/Home';
import Toolcrate from './Webpages/Toolcrate';
import Landstalker from './Webpages/Landstalker';
import Phone from './Webpages/Phone';
import Tank from './Webpages/Tank';
import PSDisplay from './Webpages/PSDisplay';
import MediaBars from "./Components/SocialmediaBars";
import BackgroundLines from "./Components/BackgroundLines";
import ScrollBar from "./Components/ScrollBar";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }

  render(){
  return (
    <BrowserRouter>
      <Header />
      <MediaBars />
      <ScrollBar />
      <BackgroundLines />
      <Route exact path='/' component={Intro}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/AboutMe' component={AboutMe}/>
      <Route exact path='/Toolcrate' component={Toolcrate}/>
      <Route exact path='/Landstalker' component={Landstalker}/>
      <Route exact path='/Phone' component={Phone}/>
      <Route exact path='/Tank' component={Tank}/>
      <Route exact path='/PSDisplay' component={PSDisplay}/>
    </BrowserRouter>
  )
}
};

export default App;