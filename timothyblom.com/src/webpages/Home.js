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
    <div className='webPages'>
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
          Hi, I am Tim.
          <br />
          I am a Junior Front-End Developer and 3D Artist, and this website is my portfolio.
          I build this website to learn, to play with my new coding superpowers and to create a place I can show my coding skills and 3D art.
        </p>
        <div className='homeTextContent'>
          <p>
          Thank you for visiting my website, feel free to look around. This website is still under construction but 
          I build a few fun features to play with:
          </p>
          <ul className='list'>
            <li>The select menu on the top left to visit other pages</li>
            <li>The 4 buttons on the bottom right to visit my social media pages</li>
            <li>The options menu in the top right -MOST FUNCTIONS DO NOT YET WORK-</li>
          </ul>
        </div>
      </div>
      <div className='homeFooter'>
        <p>
          Go to the GitHub repository of this website by clicking here:
        </p>
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