import React, {Component} from 'react';
import creditsButton from "../Images/UI/routingMenuButton.png";

export default class Credits extends Component {
    state = {
        Credits: false,
    };

    toggleCredits = () => {
        this.setState({
            Credits: !this.state.Credits,
        });
    };

    render(){

        return (
            <div className='credits'>
                <div className='creditsTextContainer'>
                    <p id='creditsHeader'>A Website created by:</p>
                    <div id='creditsFunctionAndNames'>
                        <div id='creditsFunctions'>
                            <p className='creditTexts'>Front-End Developer</p>
                            <p className='creditTexts'>3D Artist</p>
                            <p className='creditTexts'>2D Artist</p>
                            <p className='creditTexts'>Designer</p>
                            <p className='creditTexts'>Animator</p>
                            <p className='creditTexts'>Director</p>
                            <p className='creditTexts'>Assistant one</p>
                            <p className='creditTexts'>Assistant two</p>
                        </div>
                        <div id='creditsNames'>
                            <p className='creditTexts'>Timothy Blom</p>
                            <p className='creditTexts'>Timothy Blom</p>
                            <p className='creditTexts'>Timothy Blom</p>
                            <p className='creditTexts'>Timothy Blom</p>
                            <p className='creditTexts'>Timothy Blom</p>
                            <p className='creditTexts'>Timothy Blom</p>
                            <p className='creditTexts'>Timothy Blom's mom</p>
                            <p className='creditTexts'>Timothy Blom's dad</p>
                        </div>
                    </div>
                    <p id='creditsFooterHeader'>Special thanks to:</p>
                    <div id='creditFooter'>
                        <p>My teachers and classmates at Winc Academy.</p>
                        <p>My parents, for unwillingly taking the role of my assistants.</p>
                        <p>Everyone on Google, I would be hopelesslylost without it.</p>
                        <p>Video Games, for keeping me sane.</p>
                        <p>To the whole team, for exceptional teamwork and only a few conflicts.</p>
                    </div>
                </div>
                <div className='creditsButton' id='pauzeCreditsButton'>
                    <p> pauze credits </p>
                    <img className='creditsButtonUi' alt='' src={creditsButton} />
                </div>
            </div>
        )
    }
};