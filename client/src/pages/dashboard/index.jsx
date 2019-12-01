import React from 'react';

import Header from "../../component/Header/HackM-Logo/";
import Status from "../../component/Status";
import DashboardBody from "../../component/DashboardBody";
import ReferralCode from "../../component/Referral-Code";
import MajorDates from "../../component/Schedule/MajorDates";

import './dashboard.css';


class Dashboard extends React.Component {
	render(){
	  return (
		  <React.Fragment>
			<Header/>
			<Status/>
			<DashboardBody/>
			<ReferralCode/>	  
			<MajorDates/>	 		
		  </React.Fragment>
	  );
	}
}
export default Dashboard;
