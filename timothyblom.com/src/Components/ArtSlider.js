import React, {Component} from 'react';
import artsliderUI from "../Images/UI/artsliderUi.png"
import artslider1 from "../Images/Artslider/artsliderToolbox.png"
import artslider2 from "../Images/Artslider/artsliderLandstalker.png"
import artslider3 from "../Images/Artslider/artsliderPhone.png"
import artslider4 from "../Images/Artslider/artsliderTank.png"
import artsliderBackground1 from "../Images/Artslider/artsliderBackgroundToolbox.png"
import artsliderBackground2 from "../Images/Artslider/artsliderBackgroundLandstalker.png"
import artsliderBackground3 from "../Images/Artslider/artsliderBackgroundPhone.png"
import artsliderBackground4 from "../Images/Artslider/artsliderBackgroundTank.png"


export default class ArtSlider extends Component {
    render(){
        return (
            <div className='artsliderContainer'>

                <div className='backgroundArtSlider'>
                    <div className='backgroundSlides'>
                        <div className='backgroundSliderArtSheetContainer' id='backgroundFirstSheet'>
                            <img className='sliderArtSheet' alt='' src={artsliderBackground1} />
                        </div>
                        <div className='backgroundSliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artsliderBackground2} />
                        </div>
                        <div className='backgroundSliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artsliderBackground3} />
                        </div>
                        <div className='backgroundSliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artsliderBackground4} />
                        </div>
                        <div className='backgroundSliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artsliderBackground4} />
                        </div>
                    </div>
                </div>

                <img className='artsliderUi' alt='' src={artsliderUI} />

                <div className='artSlider'>
                    <div className='slides'>
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton1' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton2' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton3' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton4' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton5' />

                        <div className='sliderArtSheetContainer' id='firstSheet'>
                            <img className='sliderArtSheet' alt='' src={artslider1} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artslider2} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artslider3} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artslider4} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={artslider4} />
                        </div>
                    </div>

                    <div className='sliderNav'>
                        <label className='sliderNavButton' htmlFor='sliderRadioButton1' />
                        <label className='sliderNavButton' htmlFor='sliderRadioButton2' />
                        <label className='sliderNavButton' htmlFor='sliderRadioButton3' />
                        <label className='sliderNavButton' htmlFor='sliderRadioButton4' />
                        <label className='sliderNavButton' htmlFor='sliderRadioButton5' />
                    </div>

                </div>
            </div>
);
}}