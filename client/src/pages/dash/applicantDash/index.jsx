import React from 'react';

import Logo from "../../../component/HackM-Logo";
import Status from "../../../component/Status";
import DashboardBody from "../../../component/DashboardBody";
import TeamCode from "../../../component/TeamCode";
import MajorDates from "../../../component/Major-Dates";

import './applicant.css';


class Dashboard extends React.Component {
	render(){
	  return (
	  	<div className="App-applicant">   {/* This code basically puts "Applicant Dash"*/}
		  	<section className="container">					 {/* in the middle of the page */}
			  	<article className="applicant">
					<Logo/>
					<Status user={this.props.user}/>
					<DashboardBody user={this.props.user}/>
					<TeamCode user={this.props.user}/>
					<MajorDates/>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Dashboard;
