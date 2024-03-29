import React from 'react';
import Toolcrate3D from "../Images/Artslider/artsliderBackgroundToolbox.png"
import Toolcrate1 from "../Images/Artsheets/toolcrate1.png"
import Toolcrate2 from "../Images/Artsheets/toolcrate2.png"
import Toolcrate3 from "../Images/Artsheets/toolcrate3.png"
import Toolcrate4 from "../Images/Artsheets/toolcrate4.png"
import Toolcrate5 from "../Images/Artsheets/toolcrate5.png"
import Toolcrate6 from "../Images/Artsheets/toolcrate6.png"
import Toolcrate7 from "../Images/Artsheets/toolcrate7.png"

const Toolcrate = () => (
    <div className='webPages'>
      <div className='headerPageName'>
        <p>3D Toolcrate</p>
      </div>
      <div className='artHeader'>
        <img className='headerArtSheet' alt='' src={Toolcrate3D} />
        <p className='artHeaderDescription'>
          A Sci-Fi toolcrate of my own design
        </p>
      </div>
      <img className='artSheet' alt='' src={Toolcrate1} />
      <img className='artSheet' alt='' src={Toolcrate2} />
      <img className='artSheet' alt='' src={Toolcrate3} />
      <img className='artSheet' alt='' src={Toolcrate4} />
      <img className='artSheet' alt='' src={Toolcrate5} />
      <img className='artSheet' alt='' src={Toolcrate6} />
      <img className='artSheet' alt='' src={Toolcrate7} />
    </div>
);

export default Toolcrate;