import React from 'react';
import './dash.css';

class Dashboard extends React.Component {
	render() {
	  return (
	  	<div className="App-applicant">   {/* This code basically puts "Applicant Dash"*/}
	  		<h5>Welcome $User to your dashboard</h5>
		  	<section className="container">					 {/* in the middle of the page */}
			  	<article className="applicant">
			  	<h1>Main Dash</h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Dashboard;