import React from 'react';
import Landstalker1 from "../Images/LandstalkerSheet1.png"
import Landstalker2 from "../Images/LandstalkerSheet2.jpg"
import Landstalker3 from "../Images/LandstalkerSheet3.jpg"
import Tank1 from "../Images/TankSheet1.jpg"
import Toolcrate1 from "../Images/ToolcrateSheet1.jpg"

const dedicatedArt = () => (
    <div>
      <h1>Dedicated Art</h1>
      <div class='artHeader'>
        <img class='artSheet' alt='' src={Landstalker1} />
        <p className='artHeaderDescription'>
        The Landstalker was a playable vehichle in the video game "Ratchet Deadlocked" for the Playstation 2, I loved it and could not resist recreating it. 
        I plan on doing a High-Res version of it, when I have the time.
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