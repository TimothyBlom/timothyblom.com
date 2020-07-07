import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../Images/WebsiteLogo.png"
import menuButton from "../Images/UI/optionsMenuButton.png";

const Intro = () => (
    <div className='introPage'>

        <div id='starWarsIntro'>
            <img className='introLogo' alt='' src={Logo} />
        </div>

        <p className='introText'>Timothy Blom's online portfolio</p>

        <div className='introContinueButton'>
            <Link to='/Home'>Continue</Link>
            <img className='introContinueButtonUi' alt='' src={menuButton} />
        </div>

            {/* <p id='introWarning'>This website is in ALPHA state and not yet done</p> */}

    </div>
);

export default Intro;