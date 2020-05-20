import React, {Component} from 'react';
import menuButton from "../Images/UI/optionsMenuButton.png";
import Credits from "./Credits"
import creditsButton from "../Images/UI/routingMenuButton.png";

export default class OptionsMenu extends Component {
    state = {
        Language: false,
        Font: false,
        UI: false,
        Background: false,
        Graphics: false,
        CheatCodes: false,
        Help: false,
        Credits: false,
    };

    //the toggle functions bellow are not very dry, there should be a shorter way
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

        return (
            <div>
            <div id="blurBackground" />
                <div id='OptionsMenu'>
                    <div className='optionsButtonContainer' id='languageButton' onClick={this.toggleLanguage}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Language</p>
                        <p className='explainText'>Change the language on this website</p>
                    </div>
                    {this.state.Language &&
                        <div>
                            <p>Choose a language for this website</p>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1"> Nederlands (Dutch) </label>
                                <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" />
                                <label for="vehicle2"> English </label>
                        </div>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleFont}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Font</p>
                        <p className='explainText'>Change the text font and size settings on this website</p>
                    </div>
                    {this.state.Font &&
                        <p>test font</p>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleUI}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>UI</p>
                        <p className='explainText'>Change the User Interface style on this website</p>
                    </div>
                    {this.state.UI &&
                        <p>test UI</p>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleBackground}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Background</p>
                        <p className='explainText'>Change the background on this website</p>
                    </div>
                    {this.state.Background &&
                        <p>test background</p>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleGraphics}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Graphics</p>
                        <p className='explainText'>Change the graphics settings on this website</p>
                    </div>
                    {this.state.Graphics &&
                        <p>test graphics</p>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleCheatCodes}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Cheat Codes</p>
                        <p className='explainText'>unlock cheat codes and use them</p>
                    </div>
                    {this.state.CheatCodes &&
                        <p>test cheat codes</p>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleHelp}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Help</p>
                        <p className='explainText'>Learn usefull tips about navigating this website</p>
                    </div>
                    {this.state.Help &&
                        <p>test help</p>
                    }

                    <div className='optionsButtonContainer' onClick={this.toggleCredits}>
                        <img className='optionsButtonUi' alt='' src={menuButton} />
                        <p className='optionsMenuButton'>Credits</p>
                        <p className='explainText'>Play the credits</p>
                    </div>
                    {this.state.Credits &&
                        <div>
                            <Credits />
{/* the div below should be in the Credits component but then the function does not work */}
                            <div className='creditsButton' id='endCreditsButton' onClick={this.toggleCredits}>
                                <p> End credits </p>
                                <img className='creditsButtonUi' alt='' src={creditsButton} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
};