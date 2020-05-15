import React from 'react';
import {Link} from 'react-router-dom';
import IntroLogo from "../Images/WebsiteLogo.png"

const Intro = () => (
    <div className='introPage'>

        <img className="introLogo" alt='' src={IntroLogo} />

        <p>Intro page</p>

        <div id='starWarsIntro'>
            <p>the Ratchet and Clank and Star Wars like floating text intro</p>
        </div>

        <div className='introContinueButton'>
            <Link to='/Home'>Continue</Link>
        </div>
    </div>
);

export default Intro;