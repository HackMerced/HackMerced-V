import React from 'react';
import './hackm-logo.css';
import HACKMLOGO from "../../assets/Images/hackmerced.png";


class HackMercedLogo extends React.Component {
	render(){
	  return (
	  	<div className="App-Dashboard">  {/* This code basically puts "Admin Dash"*/}
		  	<section className="container">			{/* in the middle of the page */}
			  	<div id="header">
                  <a href="http://hackmerced.io/">
						  <img className= "hackmlogo" src={HACKMLOGO} alt= "HackMerced"/> 
					  </a>
					  </div>
                      </section>
                </div>

         );
	}
}
export default HackMercedLogo;