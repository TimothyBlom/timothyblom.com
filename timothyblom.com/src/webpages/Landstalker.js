import React from 'react';
import Landstalker3D from "../Images/Artslider/artsliderBackgroundLandstalker.png"
import Landstalker1R from "../Images/Artsheets/landstalker1R.png"
import Landstalker1B from "../Images/Artsheets/landstalker1B.png"
import Landstalker2R from "../Images/Artsheets/landstalker2R.png"
import Landstalker2B from "../Images/Artsheets/landstalker2B.png"
import Landstalker3R from "../Images/Artsheets/landstalker3R.png"
import Landstalker3B from "../Images/Artsheets/landstalker3B.png"
import Landstalker4R from "../Images/Artsheets/landstalker4R.png"
import Landstalker4B from "../Images/Artsheets/landstalker4B.png"
import Landstalker5R from "../Images/Artsheets/landstalker5R.png"
import Landstalker5B from "../Images/Artsheets/landstalker5B.png"
import Landstalker6R from "../Images/Artsheets/landstalker6R.png"
import Landstalker6B from "../Images/Artsheets/landstalker6B.png"

const Landstalker = () => (
    <div>
      <div className='headerPageName'>
        <p>3D Landstalker</p>
      </div>
      <div className='artHeader'>
        <img className='headerArtSheet' alt='' src={Landstalker3D} />
        <p className='artHeaderDescription'>
          The Landstalker is a playable vehigle in the Playstation 2 video game Ratchet Deadlocked, 
          I loved it and could not resist recreating it
        </p>
      </div>

      <img className='artSheet' alt='' src={Landstalker1R} />
      <img className='artSheet' alt='' src={Landstalker1B} />
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>

      <img className='artSheet' alt='' src={Landstalker2R} />
      <img className='artSheet' alt='' src={Landstalker2B} />
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>

      <img className='artSheet' alt='' src={Landstalker3R} />
      <img className='artSheet' alt='' src={Landstalker3B} />
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>

      <img className='artSheet' alt='' src={Landstalker4R} />
      <img className='artSheet' alt='' src={Landstalker4B} />
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>

      <img className='artSheet' alt='' src={Landstalker5R} />
      <img className='artSheet' alt='' src={Landstalker5B} />
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>

      <img className='artSheet' alt='' src={Landstalker6R} />
      <img className='artSheet' alt='' src={Landstalker6B} />
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>

    </div>
);

export default Landstalker;