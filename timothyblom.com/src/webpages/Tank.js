import React from 'react';
import Tank3D from "../Images/Artslider/artsliderBackgroundTank.png"
import Tank1 from "../Images/Artsheets/tank1.png"
import Tank2 from "../Images/Artsheets/tank2.png"
import Tank3 from "../Images/Artsheets/tank3.png"


const Tank = () => (
    <div className='webPages'>
      <div className='headerPageName'>
        <p>3D Tank</p>
      </div>
      <div className='artHeader'>
        <img className='headerArtSheet' alt='' src={Tank3D} />
        <p className='artHeaderDescription'>
          The Leopard 2 bridge layer tank, a project of mine while I interned at the simulation department of the dutch military.
        </p>
      </div>
      <img className='artSheet' alt='' src={Tank1} />
      <img className='artSheet' alt='' src={Tank2} />
      <img className='artSheet' alt='' src={Tank3} />
    </div>
);

export default Tank;