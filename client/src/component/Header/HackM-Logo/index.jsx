import React from 'react';
import './hackm-logo.css';
import HACKMLOGO from "./hackmerced.png";


class HackMercedLogo extends React.Component {
	render(){
	  return (
      <div className="App-Header" id="Header">  {/* This code basically puts "Admin Dash"*/}
          <a href="http://hackmerced.io/"> {/* Navigate to HackMerced website*/}
            <img className= "hackmlogo" src={HACKMLOGO} alt= "HackMerced"/> 
          </a>
        </div>
         );
	}
}
export default HackMercedLogo;