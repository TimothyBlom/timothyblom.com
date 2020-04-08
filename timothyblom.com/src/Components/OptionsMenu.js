import React from 'react';

const OptionsMenu = () => {
    return (
        <div id='OptionsMenu'>
            <div className='optionsButtonContainer'>
                <button className='optionsMenuButton'>Language</button>
                <p className='explainText'>Change the language on this website</p>
            </div>
            <div className='optionsButtonContainer'>
                <button className='optionsMenuButton'>Font</button>
                <p className='explainText'>Change the text font and size settings on this website</p>
            </div>
            <div className='optionsButtonContainer'>
                <button className='optionsMenuButton'>UI</button>
                <p className='explainText'>Change the User Interface on this website</p>
            </div>
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
};

export default OptionsMenu;