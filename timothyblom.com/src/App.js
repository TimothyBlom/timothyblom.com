import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter, Route} from "react-router-dom";
import './Styles/style.css';
import Header from "./Components/Header";
import Intro from './Webpages/Intro';
import AboutMe from "./Webpages/AboutMe";
import Home from './Webpages/Home';
import dedicatedArt from './Webpages/dedicatedArt';
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
      <Route exact path='/dedicatedArt' component={dedicatedArt}/>
    </BrowserRouter>
  )
}
};

export default App;