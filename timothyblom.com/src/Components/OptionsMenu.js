import React, {Component} from 'react';

export default class OptionsMenu extends Component {
    state = {
        Language: false,
        Font: false,
        UI: false,
    };

    toggleLanguage = () => {
        this.setState({
            Language: !this.state.Language,
            Font: this.state = false,
            UI: this.state = false,
        });
    };

    toggleFont = () => {
        this.setState({
            Font: !this.state.Font,
            // Options: this.state.Options = false
        });
    };

    toggleUI = () => {
        this.setState({
            UI: !this.state.UI,
            // Options: this.state.Options = false
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
                    <p>test</p>
                }

                <div id='fontButton' className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleFont}>Font</button>
                    <p className='explainText'>Change the text font and size settings on this website</p>
                </div>
                {this.state.Font &&
                    <p>test</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' onClick={this.toggleUI}>UI</button>
                    <p className='explainText'>Change the User Interface style on this website</p>
                </div>
                {this.state.UI &&
                    <p>test</p>
                }

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton'>Background</button>
                    <p className='explainText'>Change the background on this website</p>
                </div>

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton'>Graphics</button>
                    <p className='explainText'>Change the graphics settings on this website</p>
                </div>

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton'>Help</button>
                    <p className='explainText'>Learn usefull tips about navigating this website</p>
                </div>

                <div className='optionsButtonContainer'>
                    <button className='optionsMenuButton' >Credits</button>
                    <p className='explainText'>Play the credits</p>
                </div>

            </div>
        )
    }
};