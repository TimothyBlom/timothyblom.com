import React from 'react';
import headshot from "../Images/headshot2.jpg"
import htmlLogo from "../Images/htmlLogo.png"
import cssLogo from "../Images/cssLogo.png"
import javascriptLogo from "../Images/javascriptLogo.png"
import nodeLogo from "../Images/nodeLogo.png"
import vscLogo from "../Images/vscLogo.png"
import sassLogo from "../Images/sassLogo.png"
import reactLogo from "../Images/reactLogo.png"
import pythonLogo from "../Images/pythonLogo.png"
import githubLogo from "../Images/gitLogo.png"
import photoshopLogo from "../Images/photoshopLogo.png"
import illustratorLogo from "../Images/illustratorLogo.png"
import dsMaxLogo from "../Images/3dsMaxLogo.jpg"
import mayaLogo from "../Images/mayaLogo.png"
import cinema4dLogo from "../Images/cinema4dLogo.png"
import substancePainterLogo from "../Images/substancePainterLogo.png"
import unityLogo from "../Images/unityLogo.png"
import unrealEngine4Logo from "../Images/unrealEngine4Logo.png"
import wincDiploma from "../Images/WincDiplomaTimothyBlom.png"
import characterImg from "../Images/characterSheet.png"

const AboutMe = () => (
    <div>

      <div className='headerPageName'>
        <p>About Me</p>
      </div>

      <div id='starWarsIntro'>
        <p>the star wars like floating text intro</p>
      </div>

      <div id='aboutMeIntro'>
        <div id='characterSheet'>
          <div id='characterSheetImg'>
            <img id='characterImg' alt='' src={characterImg} />
          </div>
          <div id='characterSkills'>
            <p>
              I am a Front End Developer and a 3D Artist. I live in the Netherlands in a little town called Heerhugowaard. 
              I spent most of my time playing video games, learning new code, making 3D art and coming up with new cool projects I never end up finishing.
            </p>
            <ul>
              <li>Name: Tim</li>
              <li>Born: November 1996</li>
              <li>Current living location: Heerhugowaard, Netherlands, Earth</li>
              <li>Front-End skill:</li>
              <li>Creativity:</li>
              <li>3D modeling:</li>
              <li>Google solutions:</li>
              <li>Hand to hand combad:</li>
              <li>streanght:</li>
              <li>Weakness: </li>
            </ul>
          </div>
        </div>
      </div>

      <div id='mySoftwareSkillsContainer'>
        <p id='mySoftwareSkillsHeader'>
          My software skills include the following:
        </p>
        <div id='mySoftwareSkills'>
          <div id='mySoftwareSkillsText'>
            <p>
              I have experience with a lot of software, both for coding and 3D modeling. On top of that I am very familare with Photo editing software, espacialy Photoshop.
              I love creating stuff and making it look cool, and always try to learn new software to do that.
            </p>
          </div>
          <div className='mySoftwareSkillsIcons'>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={htmlLogo} />
              <p className='iconName'> HTML5 </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={cssLogo} />
              <p className='iconName'> CSS3 </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={javascriptLogo} />
              <p className='iconName'> Javascript </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={pythonLogo} />
              <p className='iconName'> Python </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={sassLogo} />
              <p className='iconName'> SASS </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={reactLogo} />
              <p className='iconName'> Javascript React </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={vscLogo} />
              <p className='iconName'> Visual Studio Code </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={nodeLogo} />
              <p className='iconName'> Node.js </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={githubLogo} />
              <p className='iconName'> Git (Hub) </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={photoshopLogo} />
              <p className='iconName'> Photoshop </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={illustratorLogo} />
              <p className='iconName'> Illustrator </p>
            </div>
            {/* <hr /> */}
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={dsMaxLogo} />
              <p className='iconName'> 3Ds Studio Max </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={mayaLogo} />
              <p className='iconName'> Maya </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={cinema4dLogo} />
              <p className='iconName'> Cinema 4D </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={substancePainterLogo} />
              <p className='iconName'> Substance Painter </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={unityLogo} />
              <p className='iconName'> Unity </p>
            </div>
            <div className='homeIconDiv'>
              <img className='programIcon' alt='' src={unrealEngine4Logo} />
              <p className='iconName'> Unreal Engine 4 </p>
            </div>
          </div>
        </div>
      </div>
      <h1>
      <img className='wincDiploma' alt='' src={wincDiploma} />
      </h1>
      <div id='aboutMeFooter'>
        <img class='headshot' alt='' src={headshot} />
        <p>
          I am always interted in new upertunities and meeting new people, currently I am looking for a fulltime job as Frond End Developer. 
          If you are interested in meeting me please contact me at tga.blom@gmail.com, 
          you can also use the buttons on the right of the screen to go directly to my GitHub page, my LinkedIn page, my Artstation page or my Email.
        </p>
      </div>

    </div>
);

export default AboutMe;