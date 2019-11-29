import React from 'react';
import './volDash.css';

class Volunteer extends React.Component {
	render(){
	  return (
	  	<div className="App-vol">   {/* This code basically puts "Volunteer Dash"*/}
		  	<section className="container">			  {/* in the middle of the page */}
			  	<article className="volunteer">
			  	<h1>Welcome {this.props.user.name}</h1>
			  	<h2>Thank you for volunteering</h2>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Volunteer;