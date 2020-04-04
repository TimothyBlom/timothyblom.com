import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LogoFull from "../Images/LogoFull.png"

export default class Header extends Component {
    state = {
        on: false,
    };

    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };

    render(){
        return (
            <div id='header'>
                <div className='headerMainButtons' id='selectButton'>
                    <button onClick={this.toggle}/>
                    <p>Select</p>
                </div>
                <div className='headerMainButtons' id='optionsButton'>
                    <button />
                    <p>Options</p>
                </div>
                <img className='logoTop' src={LogoFull} />
                {this.state.on &&
                    <div id='navigationMenu'>
                        <Link className='navLink' to='/'>Home Page</Link>
                        <br />
                        <Link className='navLink' to='/AboutMe'>About Me</Link>
                        <br />
                        <Link className='navLink' to='/dedicatedArt'>Dedicated Art</Link>
                    </div>
                }
            </div>
        )
    }
};