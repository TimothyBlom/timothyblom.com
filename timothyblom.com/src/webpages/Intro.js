import React from 'react';
import {Link} from 'react-router-dom';
import WebsiteLogo from "../Components/WebsiteLogo"
import menuButton from "../Images/UI/optionsMenuButton.png";

const Intro = () => (
    <div className='introPage'>

        <div id='starWarsIntro'>
            <p>the Ratchet and Clank and Star Wars like floating text intro</p>
        </div>

        <div className='introContinueButton'>
            <Link to='/Home'>Continue</Link>
            <img className='introContinueButtonUi' alt='' src={menuButton} />
        </div>

    </div>
);

export default Intro;