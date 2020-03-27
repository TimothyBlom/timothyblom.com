import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <button className='headerMainButtons'>Navigation Menu</button>
            <div id='navigationMenu'>
                <Link className='navLink' to='/'>Home Page</Link>
                <br />
                <Link className='navLink' to='/AboutMe'>About Me</Link>
                <br />
                <Link className='navLink' to='/dedicatedArt'>Dedicated Art</Link>
            </div>
            <button className='headerMainButtons'>Options Menu</button>
            <div id='optionsMenu'>
                <button className='optionsButton'>Language</button>
                <button className='optionsButton'>Text size</button>
                <button className='optionsButton'>Text fond</button>
                <button className='optionsButton'>Color style</button>
                <button className='optionsButton'>Background</button>
                <button className='optionsButton'>Graphics settings</button>
                <button className='optionsButton'>Help</button>
                <button className='optionsButton'>Credits</button>
            </div>
        </div>
    )
};

export default Header;