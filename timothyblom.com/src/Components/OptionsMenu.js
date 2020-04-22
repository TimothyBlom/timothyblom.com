import React, {Component} from 'react';

export default class OptionsMenu extends Component {
    state = {
        Language: false,
        Font: false,
        UI: false,
        Background: false,
        Graphics: false,
        CheatCodes: this.state = false,
        Help: false,
        Credits: false,
    };

    toggleLanguage = () => {
        this.setState({
            Language: !this.state.Language,
            Font: this.state = false,
            UI: this.state = false,
            Background: this.state = false,
            Graphics: this.state = false,
            CheatCodes: this.state = false,
            Help: this.state = false,
            Credits: this.state = false,
        });
    };

    toggleFont = () => {
        this.setState({
            Font: !this.state.Font,
            Language: this.state = false,
            UI: this.state = false,
            Background: this.state = false,
            Graphics: this.state = false,
            CheatCodes: this.state = false,
            Help: this.state = false,
            Credits: this.state = false,
        });
    };

    toggleUI = () => {
        this.setState({
            UI: !this.state.UI,
            Language: this.state = false,
            Font: this.state = false,
            Background: this.state = false,
            Graphics: this.state = false,
            CheatCodes: this.state = false,
            Help: this.state = false,
            Credits: this.state = false,
        });
    };

    toggleBackground = () => {
        this.setState({
            Background: !this.state.Background,
            Language: this.state = false,
            Font: this.state = false,
            UI: this.state = false,
            Graphics: this.state = false,
            CheatCodes: this.state = false,
            Help: this.state = false,
            Credits: this.state = false,
        });
    };

    toggleGraphics = () => {
        this.setState({
            Graphics: !this.state.Graphics,
            Language: this.state = false,
            Font: this.state = false,
            UI: this.state = false,
            Background: this.state = false,
            CheatCodes: this.state = false,
            Help: this.state = false,
            Credits: this.state = false,
        });
    };

    toggleCheatCodes = () => {
        this.setState({
            CheatCodes: !this.state.CheatCodes,
            Language: this.state = false,
            Font: this.state = false,
            UI: this.state = false,
            Background: this.state = false,
            Credits: this.state = false,
            Graphics: this.state = false,
            Help: this.state = false,
        });
    };

    toggleHelp = () => {
        this.setState({
            Help: !this.state.Help,
            Language: this.state = false,
            Font: this.state = false,
            UI: this.state = false,
            Background: this.state = false,
            CheatCodes: this.state = false,
            Graphics: this.state = false,
            Credits: this.state = false,
        });
    };

    toggleCredits = () => {
        this.setState({
            Credits: !this.state.Credits,
            Language: this.state = false,
            Font: this.state = false,
            UI: this.state = false,
            Background: this.state = false,
            CheatCodes: this.state = false,
            Graphics: this.state = false,
            Help: this.state = false,
        });
    };

    render(){

                            //pause button function below, doesn't work

        // const creditsPauzeButton = document.getElementById('pauzeCreditsButton'),
        //     creditsText = document.getElementById('creditsTextContainer');

        // creditsPauzeButton.onClick = function() {
        //     creditsText.classList.toggle('paused');
        // };

        // console.log('pauze button', creditsPauzeButton, creditsText)

        return (
            <div id='OptionsMenu'>
                <div className='optionsButtonContainer' onClick={this.toggleLanguage}>
                    <p className='optionsMenuButton'>Language</p>
                    <p className='explainText'>Change the language on this website</p>
                </div>
                {this.state.Language &&
                    <p>test language</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleFont}>
                    <p className='optionsMenuButton'>Font</p>
                    <p className='explainText'>Change the text font and size settings on this website</p>
                </div>
                {this.state.Font &&
                    <p>test font</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleUI}>
                    <p className='optionsMenuButton'>UI</p>
                    <p className='explainText'>Change the User Interface style on this website</p>
                </div>
                {this.state.UI &&
                    <p>test UI</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleBackground}>
                    <p className='optionsMenuButton'>Background</p>
                    <p className='explainText'>Change the background on this website</p>
                </div>
                {this.state.Background &&
                    <p>test background</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleGraphics}>
                    <p className='optionsMenuButton'>Graphics</p>
                    <p className='explainText'>Change the graphics settings on this website</p>
                </div>
                {this.state.Graphics &&
                    <p>test graphics</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleCheatCodes}>
                    <p className='optionsMenuButton'>Cheat Codes</p>
                    <p className='explainText'>unlock cheat codes and use them</p>
                </div>
                {this.state.CheatCodes &&
                    <p>test cheat codes</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleHelp}>
                    <p className='optionsMenuButton'>Help</p>
                    <p className='explainText'>Learn usefull tips about navigating this website</p>
                </div>
                {this.state.Help &&
                    <p>test help</p>
                }

                <div className='optionsButtonContainer' onClick={this.toggleCredits}>
                    <p className='optionsMenuButton'>Credits</p>
                    <p className='explainText'>Play the credits</p>
                </div>
                {this.state.Credits &&
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
                        <p className='endCreditsButton' onClick={this.toggleCredits}>
                            End credits
                        </p>
                        <p id='pauzeCreditsButton'>
                            pauze credits
                        </p>
                    </div>
                }

            </div>
        )
    }
};