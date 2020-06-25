import React from 'react';
import Display1 from "../Images/Artslider/artsliderBackgroundToolbox.png"
import Display2 from "../Images/Artsheets/phone2.png"

const PSDisplay = () => (
    <div className='webPages'>
      <div className='headerPageName'>
        <p>PS Display</p>
      </div>
      <div className='artHeader'>
        <img className='headerArtSheet' alt='' src={Display1} />
        <p className='artHeaderDescription'>
          As a lifelong PlayStation fan I am lokking forward to the release of the Playstation 5.
          To selebrate it I wanted to display my collection of older playstations.
        </p>
      </div>

      <img className='artSheet' alt='' src={Display2} />


    </div>
);

export default PSDisplay;