import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OptionsMenu from "./OptionsMenu"
import WebsiteLogo from "../Components/WebsiteLogo"
import mainButton from "../Images/UI/headerButton.png"
import routingButtonUi from "../Images/UI/routingMenuButton.png"
import routingMenuUi from "../Images/UI/routingMenu.png"

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
                        <img className='routingMenuUi' id='routingMenuUiL' alt='' src={routingMenuUi} />
                            <div className='navButton'>
                                <Link className='navButtonText' to='/Home'>Home Page</Link>
                                <img className='routingButtonUi' alt='' src={routingButtonUi} />
                            </div>
                            <br />
                            <div className='navButton'>
                                <Link className='navButtonText' to='/AboutMe'>About Me</Link>
                                <img className='routingButtonUi' alt='' src={routingButtonUi} />
                            </div>
                            <br />
                            <div className='navButton'>
                                <Link className='navButtonText' to='/Toolcrate'>Toolcrate</Link>
                                <img className='routingButtonUi' alt='' src={routingButtonUi} />
                            </div>
                            <br />
                            <div className='navButton'>
                                <Link className='navButtonText' to='/Landstalker'>Landstalker</Link>
                                <img className='routingButtonUi' alt='' src={routingButtonUi} />
                            </div>
                            <br />
                            <div className='navButton'>
                                <Link className='navButtonText' to='/Phone'>Phone</Link>
                                <img className='routingButtonUi' alt='' src={routingButtonUi} />
                            </div>
                            <br />
                            <div className='navButton'>
                                <Link className='navButtonText' to='/Tank'>Tank</Link>
                                <img className='routingButtonUi' alt='' src={routingButtonUi} />
                            </div>
                            <img className='routingMenuUi' id='routingMenuUiR' alt='' src={routingMenuUi} />
                        </div>
                    }
                </div>
            </div>
        )
    }
};