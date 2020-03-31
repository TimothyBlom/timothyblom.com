import React from 'react';
import {Link} from 'react-router-dom';

const OptionsMenu = () => {
    return (
        <div id='OptionsMenu'>
            <div id='OptionsMenu'>
                <button className='optionsButton'>Language</button>
                <button className='optionsButton'>Text size</button>
                <button className='optionsButton'>Text fond</button>
                <button className='optionsButton'>Color style</button>
                <button className='optionsButton'>Background</button>
                <button className='optionsButton'>Graphics settings</button>
                <button className='optionsButton'>Help</button>
                <button className='optionsButton'>Credits</button>
            </div>
        </div>
    )
};

export default OptionsMenu;