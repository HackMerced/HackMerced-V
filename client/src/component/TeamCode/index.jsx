import React from 'react';
import './referral-code.scss';
import axios from "axios";


class ReferralCode extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	code: "",
    	attemptTeam: "",
    };

    //this.handleJoinTeam = this.handleJoinTeam.bind(this);
  }

  handleJoinTeam(event) {
    event.preventDefault();
    if (!this.state.code != this.state.attemptTeam) {
	   	axios({
	      method: "patch",
	      url: "http://localhost:3852/api/attendees/authenticate",
	      params: {
	        email: "",
	        code: this.state.code
	      }
	    })
	      .then(response => {
	      	//console.log(response.data);
	        //console.log(`response: ${response}`)
	        if (response.data.result === "correct") {

	        } else {
	          this.setState({
	            incorrectLogin: true
	          });
	        }
	      })
	      .catch(error => console.error(error));
	  } 	  
    }

	render(){
	  return (
	  	<div className = "referral-body">
	        <div className = "referral-Container">
	            <h1> Your Referral Code </h1>
	            <div className="yourCode">
	            	<p>1111</p>
	            </div>
	            <div className= "joinCode">
	            {/*
	            	<div className="join">
	            	<button className="joinTeam" type="submit">
	                		Join a Team!
	              		</button>
	            	</div>
	            */}
		            <div className="join-left">
		            	<input
		                type="text"
		                name="usersCode"
		                placeholder = "####"
		                maxlength="4"
		              	/>
		            </div>
		            <div className="join-right">
		              	<button className="joinSubmit" type="submit">
	                		▲
	              		</button>
              		</div>
	            </div>
	        </div>
        </div>
       );
	}
}
export default ReferralCode;