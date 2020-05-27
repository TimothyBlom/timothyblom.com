import React from 'react';
import Phone3D from "../Images/Artslider/artsliderBackgroundPhone.png"
import Phone1 from "../Images/Artsheets/phone1.png"
import Phone2 from "../Images/Artsheets/phone2.png"
import Phone3 from "../Images/Artsheets/phone3.png"

const Phone = () => (
    <div className='webPages'>
      <div className='headerPageName'>
        <p>3D Phone</p>
      </div>
      <div className='artHeader'>
        <img className='headerArtSheet' alt='' src={Phone3D} />
        <p className='artHeaderDescription'>
          A phone of my own design, inspired by populair brands. This was just a fun practice project.
        </p>
      </div>
      <img className='artSheet' alt='' src={Phone1} />
      <img className='artSheet' alt='' src={Phone2} />
      <img className='artSheet' alt='' src={Phone3} />
    </div>
);

export default Phone;