import React, {Component} from 'react';
import templateSheet from "../Images/sheetTemplate.png"

export default class ArtSlider extends Component {
    render(){
        return (
    <div className='artSlider'>

        <div className='slides'>
            <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton1' />
            <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton2' />
            <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton3' />
            <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton4' />
            <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton5' />

            <div className='sliderArtSheetContainer' id='firstSheet'>
                <img className='sliderArtSheet' src={templateSheet} />
            </div>
            <div className='sliderArtSheetContainer'>
                <img className='sliderArtSheet' src={templateSheet} />
            </div>
            <div className='sliderArtSheetContainer'>
                <img className='sliderArtSheet' src={templateSheet} />
            </div>
            <div className='sliderArtSheetContainer'>
                <img className='sliderArtSheet' src={templateSheet} />
            </div>
            <div className='sliderArtSheetContainer'>
                <img className='sliderArtSheet' src={templateSheet} />
            </div>
        </div>

        <div className='sliderNav s1'>
            <label className='sliderNavButton' for='sliderRadioButton1' />
            <label className='sliderNavButton' for='sliderRadioButton2' />
            <label className='sliderNavButton' for='sliderRadioButton3' />
            <label className='sliderNavButton' for='sliderRadioButton4' />
            <label className='sliderNavButton' for='sliderRadioButton5' />
        </div>

    </div>
);
}}