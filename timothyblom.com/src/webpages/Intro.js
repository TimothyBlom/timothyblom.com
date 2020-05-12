import React from 'react';
import {Link} from 'react-router-dom';
import introLogo from "../Images/LogoFull.png"

const Intro = () => (
    <div className='introPage'>
        <p>Intro page</p>
        <img className='introLogo' alt='' src={introLogo} />
        <div className='introContinueButton'>
            <Link to='/Home'>Continue</Link>
        </div>
    </div>
);

export default Intro;