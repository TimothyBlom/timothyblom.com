import React from 'react';
import Landstalker1 from "../Images/LandstalkerSheet1.png"
import Landstalker2 from "../Images/LandstalkerSheet2.jpg"
import Landstalker3 from "../Images/LandstalkerSheet3.jpg"
import Tank1 from "../Images/TankSheet1.jpg"
import Toolcrate1 from "../Images/ToolcrateSheet1.jpg"

const dedicatedArt = () => (
    <div>
      <div className='headerPageName'>
        <p>Dedicated Art</p>
      </div>
      <div class='artHeader'>
        <img class='headerArtSheet' alt='' src={Landstalker2} />
        <p className='artHeaderDescription'>
          The Landstalker was a playable vehichle in the video game "Ratchet Deadlocked" 
          for the Playstation 2, one of my all time favorite Sci-Fi vehichle. 
        </p>
      </div>
      <img class='artSheet' alt='' src={Landstalker1} />
      <img class='artSheet' alt='' src={Landstalker2} />
      <img class='artSheet' alt='' src={Landstalker3} />
      <img class='artSheet' alt='' src={Tank1} />
      <img class='artSheet' alt='' src={Toolcrate1} />
    </div>
);

export default dedicatedArt;