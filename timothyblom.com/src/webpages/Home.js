import React from 'react';
import templateImage from "../Images/BackgroundNoAnim.jpg"
import htmlLogo from "../Images/htmlLogo.jpg"

const Home = () => (
    <div>
      <h1>Home</h1>
      <img class='artSheet' src={templateImage} />
      <p>Welcon to my portfolio website</p>
      <br />
      <p>
        My name is Timothy Blom, and this is my portefolio website. 
        Feel free to look arround, use the Navigation menu in the top left to go to other pages or play with the settings in the Options menu on the top right.
      </p>
      <p>
        Thank you for visiting my website, I build this website to learn, to play with my new coding superpowers and to show off what I can create. 
        I build this website with the following code:
      </p>
      <div className='homeIcons'>
        <img class='miniIcon' src={htmlLogo} />
        <p className='IconName'> HTML5 </p>
      </div>
      <div className='homeIcons'>
        <img class='miniIcon' src={htmlLogo} />
        <p className='IconName'> CSS3 </p>
      </div>
      <div className='homeIcons'>
        <img class='miniIcon' src={htmlLogo} />
        <p className='IconName'> SASS </p>
      </div>
      <div className='homeIcons'>
        <img class='miniIcon' src={htmlLogo} />
        <p className='IconName'> Javascript </p>
      </div>
      <div className='homeIcons'>
        <img class='miniIcon' src={htmlLogo} />
        <p className='IconName'> Javascript React </p>
      </div>
    </div>
);

export default Home;