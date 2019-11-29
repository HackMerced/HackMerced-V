import React from 'react';
import './admin.css';

class Admin extends React.Component {
	render(){
	  return (
	  	<div className="App-Admin">  {/* This code basically puts "Admin Dash"*/}
		  	<section className="container">			{/* in the middle of the page */}
			  	<article className="admin">
			  	<h1>Welcome {this.props.user.name} you are in God Mode </h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}
export default Admin;

