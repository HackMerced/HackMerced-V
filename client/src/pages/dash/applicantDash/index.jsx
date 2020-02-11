import React from 'react';
import DashboardBody from "../../../component/DashboardBody";
import TeamCode from "../../../component/TeamCode";
import MajorDates from "../../../component/Major-Dates";

import './applicant.scss';


class Dashboard extends React.Component {
	render(){
	  return (
	  	<div className="App-applicant">   {/* This code basically puts "Applicant Dash"*/}
		  	<section className="container">					 {/* in the middle of the page */}
			  	<article className="applicant">
			  		<div className="applicant-Box app-left">
						<DashboardBody user={this.props.user}/>
					</div>

					<div className="applicant-Box app-right-top">
						<TeamCode user={this.props.user}/>
					</div>

					<div className="applicant-Box app-right-bot">
						<MajorDates/>
					</div>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Dashboard;
