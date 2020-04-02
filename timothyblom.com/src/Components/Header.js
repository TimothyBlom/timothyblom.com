import React from 'react';
import {Link} from 'react-router-dom';
import LogoSmall from "../Images/LogoSmall.png"

const Header = () => {

function openMenu() {
    document.getElementById('menu').classList.toggle('show');
}

    return (
        <div id='header'>
                <div className='headerMainButtons' id='selectButton'>
                    <button />
                    <p>Select</p>
                </div>
                <div className='headerMainButtons' id='optionsButton'>
                    <button />
                    <p>Options</p>
                </div>
                <img className='logoSmall' src={LogoSmall} />
            <div id='navigationMenu'>
                <Link className='navLink' to='/'>Home Page</Link>
                <br />
                <Link className='navLink' to='/AboutMe'>About Me</Link>
                <br />
                <Link className='navLink' to='/dedicatedArt'>Dedicated Art</Link>
            </div>
        </div>
    )
};

export default Header;