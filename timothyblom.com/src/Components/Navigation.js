import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div id='nav'>
            <Link className='navLink' id='homeButton' to='/'>Home Page</Link>
            <br />
            <Link className='navLink' to='Webpage/AboutMe'>About Me</Link>

        </div>
    )
};

export default Navigation;