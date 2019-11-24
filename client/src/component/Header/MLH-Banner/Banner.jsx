import React from 'react';
import './banner.css'
//import banner from './banner.png';
//the banner is a seperate component to set ourselves up for the banner changing relative to the time

class Banner extends React.Component {
    render() {
        return(
            <article className="App-banner">
            	<a href="https://mlh.io/seasons/na-2020/events">  {/* Banner is sourced and clickable */}
                     <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg" 
                          alt="Major League Hacking 2020 Hackathon Season"
                          ></img> 
            	</a>         
            </article>
        )
    }
}

export default Banner;