import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => (
    <div className='introPage'>
        <p>Intro page</p>
        <Link className='introContinueButton' to='/Home'>Continue</Link>
    </div>
);

export default Intro;