import React from 'react';
import axios from 'axios';

import Admin from './adminDash';
import Judge from './judgeDash';
import Applicant from './applicantDash';
import Volunteer from './volDash';

import './dash.css';

class Dashboard extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      person:[]
    };
  }

  componentDidMount() {
    axios({
        method: "post",
        url: "http://localhost:3852/api/attendees/q",
        data: {
        "myEmail": "shivanshu.gupta@gmail.com"
        }
      }).then(response =>{
        var user = response.data.user;
        //console.log(user);
        if(user !== "application does not exist"){
          this.setState({
            person: user
          });
        }else{
          this.props.history.push("/login");
        }
    });
  }

	render() {
	//console.log(this.state.person);
	const userType = this.state.person.myPrivileges;
	//console.log(userType);
	switch(userType){
		case 1:
			return(
				<Admin user={this.state.person}/>
	  		); 
		case 2:
			return(
				<Volunteer user={this.state.person}/>
	  		); 
		case 3:
			return(
				<Judge user={this.state.person}/>
	  		); 
		case "attendee":
			return(
				<Applicant user={this.state.person}/>
	  		); 
		default:
			return(
				<div className="App-user">
			  	<section className="container">
				  	<article className="applicant">
				  	<h2>Error Unknown User</h2>
				  	<h1>DEFINE YOURSELF INTRUDER</h1>
				  	</article>
			  	</section>
		  		</div>
	  		); 

	}
	}

}
export default Dashboard;