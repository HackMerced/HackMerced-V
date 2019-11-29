import React from 'react';
import './judge.css';

class Judge extends React.Component {
	render() {
	  return (
	  	<div className="App-judging" id="Judging">   {/* This code basically puts "Judging Dash"*/}
		  	<section className="container">				 {/* in the middle of the page */}
			  	<article className="judging">
			  	<h2>Welcome {this.props.user.name}</h2>
			  	<h1>Thank you for judging at this event</h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Judge;