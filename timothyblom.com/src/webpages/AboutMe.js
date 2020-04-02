import React from 'react';
import headshot from "../Images/headshot.jpg"
import htmlLogo from "../Images/htmlLogo.jpg"

const AboutMe = () => (
    <div>
      <h1>About Me</h1>
      <div id='aboutMeIntro'>
        <img class='headshot' src={headshot} />
        <p>
          I am a Front End Developer and a 3D Artist. I live in the Netherlands in a little town called Heerhugowaard. 
          I spent most of my time playing video games, learning new code, making 3D art and coming up with new cool projects I am never gonna finish.
        </p>
      </div>
      <div id='mySoftwareSkills'>
        <p id='mySoftwareSkillsHeader'>
          My software skills include the following
        </p>
        <p id='mySoftwareSkillsText'>
          I have experience with a lot of software, both for coding and 3D modeling. On top of that I am very familare with Photo editing software, espacialy Photoshop.
          I love creating stuff and making it look cool, and always try to learn new software to do that.
        </p>
        <div id='mySoftwareSkillsIcons'>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> HTML5 </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> CSS3 </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> JavaScript </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> JavaScript React </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Git </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Photoshop </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Illustrator </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> 3Ds Studio Max </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Maya </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Cinema 4D </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Substance Painter </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Unity </p>
          </div>
          <div className='softwareIcons'>
            <img class='miniIcon' src={htmlLogo} />
            <p className='IconName'> Unreal engine 4 </p>
          </div>
        </div>
      </div>
      <div id='contactTab'>
        <img class='headshot' src={headshot} />
        <p>
          I am always interted in new upertunities and meeting new people, currently I am looking for a fulltime job as Frond End Developer. 
          If you are interested in meeting me please contact me at tga.blom@gmail.com, 
          you can also use the buttons on the right of the screen to go directly to my GitHub page, my LinkedIn page, my Artstation page or my Email.
        </p>
      </div>
    </div>
);

export default AboutMe;