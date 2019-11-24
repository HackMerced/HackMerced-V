import React from 'react';
// import { Link } from 'react-router-dom' //Links Library from React Router
import './navBar.css'
import Banner from './MLH-Banner/Banner.jsx'
/* This Nav bar is super rough its not nearly as close to the draft sketched by the design team */


class NavigationBar extends React.Component {
    render() {
        return(
            <article>
                <section>
                    <Banner /> {/* Link to Banner */}
                </section>
                <section className="App-nav" id="Navigation-Bar">
                    <nav className = "nav-link">
                        <a className= "style-link" href="/#schedule" title= "HackMerced Schedule">Schedule</a> {/* RR link to Our Hackathon Schedule of home page */}
                    </nav>
                    <nav className = "nav-link">
                        <a className= "style-link" href='/#faq' title= "Frequently Asked Questions">FAQ</a> {/* RR link to FAQ of home page */}
                    </nav>
                    <nav className = "nav-link">  
                        <a className= "style-link" href='/#about-us' title= "About Us!">About Us</a> {/* RR link to About Us section of home page */}
                    </nav>
                    <nav className = "nav-link">  
                        <a className= "style-link" href='/#sponsors' title= "Our Sponsors <3">Sponsors</a> {/* RR link to sponsers section of home page */}
                    </nav>
                    {/*
                    <nav className = "nav-link">  
                        <Link className= "style-link" to='/login' title= "Login">Login</Link> 
                    </nav>
                */}
                </section>
            </article>
        )
    }
}

export default NavigationBar;