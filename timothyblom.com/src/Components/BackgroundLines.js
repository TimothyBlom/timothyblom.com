import React, {Component} from 'react';
import Particles from 'react-particles-js';



export default class BackgroundLines extends Component {
  render(){
    return (
      <Particles id="particles-js"
        height={window.outerHeight}
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 2
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        />
    )}
};