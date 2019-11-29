import React from 'react';
import axios from 'axios';
import './dash.css';
import './'

class Dashboard extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      person:[]
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/5`)
      .then(res => {
        this.setState({ person: res.data });
      })
  }

	render() {
	console.log(this.state.person);
	const userType = this.state.person.id;
	console.log(userType);
	switch(userType){
		case 1:
			return(
				<div className="App-applicant">   
		  		<h5>Welcome {this.state.person.name} to your dashboard</h5>
			  	<section className="container">
				  	<article className="applicant">
				  	</article>
				  	<h1>User 1</h1>
			  	</section>
		  		</div>
	  		); 
		case 2:
			return(
				<div className="App-applicant">   
		  		<h5>Welcome {this.state.person.name} to your dashboard</h5>
			  	<section className="container">
				  	<article className="applicant">
				  	</article>
				  	<h1>User 2</h1>
			  	</section>
		  		</div>
	  		); 
		case 3:
			return(
				<div className="App-applicant">   
		  		<h5>Welcome {this.state.person.name} to your dashboard</h5>
			  	<section className="container">
				  	<article className="applicant">
				  	</article>
				  	<h1>User 3</h1>
			  	</section>
		  		</div>
	  		); 
		case 4:
			return(
				<div className="App-applicant">   
		  		<h5>Welcome {this.state.person.name} to your dashboard</h5>
			  	<section className="container">
				  	<article className="applicant">
				  	</article>
				  	<h1>User 4</h1>
			  	</section>
		  		</div>
	  		); 
		default:
			return(
				<div className="App-applicant">   
			  	<section className="container">
				  	<article className="applicant">
				  	</article>
				  	<h1>Error User</h1>
			  	</section>
		  		</div>
	  		); 

	}




	{/*

	if(userType == 1){
		return <div>Loading...</div>
	}else if(userType == 2){
		return <div>Loading...</div>
	}else if (userType == 3){

	}else if (userType == 4){

	}
	  return (
	  	<div className="App-applicant">   {/* This code basically puts "Applicant Dash"
	  		<h5>Welcome {this.state.person.name} to your dashboard</h5>
		  	<section className="container">					 {/* in the middle of the page
			  	<article className="applicant">
			  	<h1>Main Dash</h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	  */}
	}

}
export default Dashboard;