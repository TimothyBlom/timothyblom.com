import React from 'react';
import headshot from "../Images/headshot.jpg"
import htmlLogo from "../Images/htmlLogo.png"
import cssLogo from "../Images/cssLogo.png"
import javascriptLogo from "../Images/javascriptLogo.png"
import nodeLogo from "../Images/nodeLogo.png"
import vscLogo from "../Images/vscLogo.png"
import sassLogo from "../Images/sassLogo.png"
import reactLogo from "../Images/reactLogo.png"
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

      <h1>About Me</h1>

      <div id='aboutMeIntro'>
        <h1>
          Here a character sheet with skillz about me
        </h1>
        <p>
          I am a Front End Developer and a 3D Artist. I live in the Netherlands in a little town called Heerhugowaard. 
          I spent most of my time playing video games, learning new code, making 3D art and coming up with new cool projects I am never gonna finish.
        </p>
        <div id='characterSheet'>
          <div id='characterSheetImg'>
            <img id='characterImg' alt='' src={characterImg} />
          </div>
          <div id='characterSkills'>
            <ul>
              <li>skill 1</li>
              <li>skill 2</li>
              <li>skill 3</li>
              <li>skill 4</li>
              <li>skill 5</li>
            </ul>
          </div>
        </div>
      </div>

      <div id='mySoftwareSkills'>
        <div id='mySoftwareSkillsHeader'>
          <p>
            My software skills include the following
          </p>
        </div>
        <div>
          <p id='mySoftwareSkillsText'>
            I have experience with a lot of software, both for coding and 3D modeling. On top of that I am very familare with Photo editing software, espacialy Photoshop.
            I love creating stuff and making it look cool, and always try to learn new software to do that.
          </p>
        </div>
        <div id='mySoftwareSkillsIcons'>
        <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={htmlLogo} />
            <p className='iconName'> HTML5 </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={cssLogo} />
            <p className='iconName'> CSS3 </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={sassLogo} />
            <p className='iconName'> SASS </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={javascriptLogo} />
            <p className='iconName'> Javascript </p>
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
            <p className='iconName'> Git </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={photoshopLogo} />
            <p className='iconName'> Photoshop </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={illustratorLogo} />
            <p className='iconName'> Illustrator </p>
          </div>
          <hr />
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