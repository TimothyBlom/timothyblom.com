import React, {Component} from 'react';
import Particles from 'react-particles-js';



export default class BackgroundLines extends Component {
    render(){
        return (
            <div id="particles-js">
                <Particles  params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} />
            </div>
        )
    }
};