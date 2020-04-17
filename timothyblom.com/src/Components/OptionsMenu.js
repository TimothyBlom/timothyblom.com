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
        return (
            <div id='OptionsMenu'>
                <div id='languageButton' className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleLanguage}>Language</button>
                    <p className='explainText'>Change the language on this website</p>
                </div>
                {this.state.Language &&
                    <p>test language</p>
                }

                <div id='fontButton' className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleFont}>Font</button>
                    <p className='explainText'>Change the text font and size settings on this website</p>
                </div>
                {this.state.Font &&
                    <p>test font</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleUI}>UI</button>
                    <p className='explainText'>Change the User Interface style on this website</p>
                </div>
                {this.state.UI &&
                    <p>test UI</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleBackground}>Background</button>
                    <p className='explainText'>Change the background on this website</p>
                </div>
                {this.state.Background &&
                    <p>test background</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleGraphics}>Graphics</button>
                    <p className='explainText'>Change the graphics settings on this website</p>
                </div>
                {this.state.Graphics &&
                    <p>test graphics</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleCheatCodes}>Cheat Codes</button>
                    <p className='explainText'>unlock cheat codes and use them</p>
                </div>
                {this.state.CheatCodes &&
                    <p>test cheat codes</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleHelp}>Help</button>
                    <p className='explainText'>Learn usefull tips about navigating this website</p>
                </div>
                {this.state.Help &&
                    <p>test help</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleCredits}>Credits</button>
                    <p className='explainText'>Play the credits</p>
                </div>
                {this.state.Credits &&
                    <p>test credits</p>
                }

            </div>
        )
    }
};