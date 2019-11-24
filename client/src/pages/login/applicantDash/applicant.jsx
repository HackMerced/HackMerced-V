import React from 'react';
import './applicant.css';

class Applicant extends React.Component {
	render() {
	  return (
	  	<div className="App-applicant">   {/* This code basically puts "Applicant Dash"*/}
		  	<section className="container">					 {/* in the middle of the page */}
			  	<article className="applicant">
			  	<h1>Applicant Dash</h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Applicant;