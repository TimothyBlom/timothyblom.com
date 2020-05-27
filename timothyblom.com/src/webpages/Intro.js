import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../Images/Logo3D.png"
import menuButton from "../Images/UI/optionsMenuButton.png";

const Intro = () => (
    <div className='introPage'>

        <div id='starWarsIntro'>
            <p>Here will come a Star Wars like intro, for now enjoy this static logo</p>
            <img className='introLogo' alt='' src={Logo} />
        </div>

        <div className='introContinueButton'>
            <Link to='/Home'>Continue</Link>
            <img className='introContinueButtonUi' alt='' src={menuButton} />
        </div>

            <p id='introWarning'>This website is in ALPHA state and not yet done</p>

    </div>
);

export default Intro;