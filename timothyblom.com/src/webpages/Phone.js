import React from 'react';
import Phone3D from "../Images/Artslider/artsliderBackgroundPhone.png"
import Phone1 from "../Images/Artsheets/phone1.png"
import Phone2 from "../Images/Artsheets/phone2.png"
import Phone3 from "../Images/Artsheets/phone3.png"

const Phone = () => (
    <div>
      <div className='headerPageName'>
        <p>3D Phone</p>
      </div>
      <div class='artHeader'>
        <img class='headerArtSheet' alt='' src={Phone3D} />
        <p className='artHeaderDescription'>
          A phone of my own design, inspired by populair brands. This was just a fun practice project.
        </p>
      </div>
      <img class='artSheet' alt='' src={Phone1} />
      <img class='artSheet' alt='' src={Phone2} />
      <img class='artSheet' alt='' src={Phone3} />
    </div>
);

export default Phone;