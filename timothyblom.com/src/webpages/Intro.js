import React from 'react';
import {Link} from 'react-router-dom';
import introLogo from "../Images/LogoFull.png"

const Intro = () => (
    <div className='introPage'>

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