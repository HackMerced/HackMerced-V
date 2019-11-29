import React from 'react';
import './dashboard.css';
import HACKMLOGO from "../../assets/Images/hackmerced.png";


class Dashboard extends React.Component {
	render(){
	  return (
		  <React.Fragment>
	  	<div className="App-Dashboard">  {/* This code basically puts "Admin Dash"*/}
		  	<section className="container">			{/* in the middle of the page */}
			  	<div id="header">
					  <a href="http://hackmerced.io/">
						  <img className= "hackmlogo" src={HACKMLOGO} alt= "HackMerced"/> 
					  </a>
					  </div>
					  <div id="registration">
						  <div className="dash">
							  <div className="status">
								  <h1>Your Status: </h1>
							  </div>
							  <div className = "dash-divider">
							  </div>
						  <div className="dashboard-body">
			  					<h2> User's Dashboard</h2> 
						
								  </div>	
								  <div className = "dash-divider">
							  </div>	 
						  <div className = "referral-code">
									  <h3> Referral Code </h3>
								  </div>
								 
								  <div className = "important-dates">
									  <h4> Important Dates </h4>
								  </div>
								  
						
						 	</div>
						 
					  </div> 
		  	</section>
	  	</div>
		  </React.Fragment>
	  );
	}
}
export default Dashboard;
