import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OptionsMenu from "./OptionsMenu"
import WebsiteLogo from "../Components/WebsiteLogo"
import mainButton from "../Images/UI/headerButton.png"

export default class Header extends Component {
    state = {
        Select: false,
        Options: false,
    };

    toggleSelect = () => {
        this.setState({
            Select: !this.state.Select,
            Options: this.state.Options = false
        });
    };

    toggleOptions = () => {
        this.setState({
            Options: !this.state.Options,
            Select: this.state.Select = false
        });
    };

    render(){
        return (
            <div>
                {this.state.Options &&
                    <OptionsMenu />
                }
                <div id='header'>
                    <div className='headerMainButtons' id='selectButton'>
                        <button />
                        <p>Select</p>
                        <img className='headerButtonUi' alt='' src={mainButton} onClick={this.toggleSelect} />
                    </div>
                    <div className='headerMainButtons' id='optionsButton'>
                        <button />
                        <p>Options</p>
                        <img className='headerButtonUi' alt='' src={mainButton} onClick={this.toggleOptions} />
                    </div>
                    <WebsiteLogo />
                    {this.state.Select &&
                        <div id='navigationMenu'>
                            <Link className='navLink' to='/Home'>Home Page</Link>
                            <br />
                            <Link className='navLink' to='/AboutMe'>About Me</Link>
                            <br />
                            <Link className='navLink' to='/Toolcrate'>Toolcrate</Link>
                            <br />
                            <Link className='navLink' to='/Landstalker'>Landstalker</Link>
                            <br />
                            <Link className='navLink' to='/Phone'>Phone</Link>
                            <br />
                            <Link className='navLink' to='/Tank'>Tank</Link>
                        </div>
                    }
                </div>
            </div>
        )
    }
};