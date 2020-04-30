import React, {Component} from 'react';
import Landstalker1 from "../Images/LandstalkerSheet1.png"
import Landstalker2 from "../Images/LandstalkerSheet2.jpg"
import Landstalker3 from "../Images/LandstalkerSheet3.jpg"
import Tank1 from "../Images/TankSheet1.jpg"
import Toolcrate1 from "../Images/ToolcrateSheet1.jpg"

export default class ArtSlider extends Component {
    render(){
        return (
            <div className='artsliderContainer'>

                <div className='backgroundSlides'>
                    <div className='backgroundSliderArtSheetContainer' id='backgroundFirstSheet'>
                        <img className='sliderArtSheet' alt='' src={Landstalker1} />
                    </div>
                    <div className='backgroundSliderArtSheetContainer'>
                        <img className='sliderArtSheet' alt='' src={Landstalker2} />
                    </div>
                    <div className='backgroundSliderArtSheetContainer'>
                        <img className='sliderArtSheet' alt='' src={Landstalker3} />
                    </div>
                    <div className='backgroundSliderArtSheetContainer'>
                        <img className='sliderArtSheet' alt='' src={Tank1} />
                    </div>
                    <div className='backgroundSliderArtSheetContainer'>
                        <img className='sliderArtSheet' alt='' src={Toolcrate1} />
                    </div>
                </div>

                <div className='artSlider'>
                    <div className='slides'>
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton1' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton2' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton3' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton4' />
                        <input type='radio' className='sliderRadioButtons' name='sliderRadioButton' id='sliderRadioButton5' />

                        <div className='sliderArtSheetContainer' id='firstSheet'>
                            <img className='sliderArtSheet' alt='' src={Landstalker1} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={Landstalker2} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={Landstalker3} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={Tank1} />
                        </div>
                        <div className='sliderArtSheetContainer'>
                            <img className='sliderArtSheet' alt='' src={Toolcrate1} />
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