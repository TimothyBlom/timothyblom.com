import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OptionsMenu from "./OptionsMenu"
import LoadingIcon from "../Components/LoadingIcon"

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
            <div id='header'>
                <div className='headerMainButtons' id='selectButton'>
                    <button onClick={this.toggleSelect}/>
                    <p>Select</p>
                </div>
                <div className='headerMainButtons' id='optionsButton'>
                    <button onClick={this.toggleOptions}/>
                    <p>Options</p>
                </div>
                <LoadingIcon />
                {this.state.Select &&
                    <div id='navigationMenu'>
                        <Link className='navLink' to='/'>Home Page</Link>
                        <br />
                        <Link className='navLink' to='/AboutMe'>About Me</Link>
                        <br />
                        <Link className='navLink' to='/dedicatedArt'>Dedicated Art</Link>
                    </div>
                }
                {this.state.Options &&
                    <OptionsMenu />
                }
            </div>
        )
    }
};