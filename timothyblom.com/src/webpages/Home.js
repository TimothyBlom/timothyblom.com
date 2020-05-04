import React from 'react';
import htmlLogo from "../Images/htmlLogo.png"
import cssLogo from "../Images/cssLogo.png"
import javascriptLogo from "../Images/javascriptLogo.png"
import nodeLogo from "../Images/nodeLogo.png"
import vscLogo from "../Images/vscLogo.png"
import sassLogo from "../Images/sassLogo.png"
import reactLogo from "../Images/reactLogo.png"
import githubLogo from "../Images/gitLogo.png"
import Artslider from "../Components/ArtSlider"

const Home = () => (
    <div>
      <div className='headerPageName'>
        <p>Home</p>
      </div>
      <Artslider />
      <div className='homePageText'>
      <p className='backgroundDivTitles' data-aos="fade-up">Welcome</p>
        <p id='homeTextHeader'>
          Welcome to my portfolio website
        </p>
        <br />
        <p className='homeTextContent'>
          Hello, I am Tim Blom.
          <br />
          I am a Front-End Developer with a 3D Artist background, and this website is my portfolio.
          I build this website to learn, to play with my new coding superpowers and to show what I can create.
          Thank you for visiting my website, feel free to look arround and have fun.
        </p>
        <div className='homeTextContent'>
          <p>
          Thank you for visiting my website.
          </p>
        <br />
          <ul>
            <li>options menu</li>
            <li>visit other pages</li>
            <li>find all gold bolts for a reward</li>
            <li>visit my social media pages</li>
          </ul>

        </div>
      </div>
      <div className='homeFooter'>
        <p>
            I build this website with the following programs:
        </p>
        <div className='homeIconsContainer'>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={htmlLogo} />
            <p className='iconName'> HTML5 </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={cssLogo} />
            <p className='iconName'> CSS3 </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={javascriptLogo} />
            <p className='iconName'> Javascript </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={sassLogo} />
            <p className='iconName'> SASS </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={reactLogo} />
            <p className='iconName'> Javascript React </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={vscLogo} />
            <p className='iconName'> Visual Studio Code </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={nodeLogo} />
            <p className='iconName'> Node.js </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={githubLogo} />
            <p className='iconName'> Git (Hub) </p>
          </div>
        </div>
        </div>
    </div>
);

export default Home;