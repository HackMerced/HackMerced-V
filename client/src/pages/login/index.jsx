import React from 'react';
import './login.css';
import { Link } from 'react-router-dom' //Links Library from React Router

class Login extends React.Component { 
	render() {
	  return (
	  	<div className="App-login">   
		  	<article className="center-the-login">
			  		<section className = "login-title">
			  			<h2>Login</h2>
			  		</section>
			  		<main>
				  		<form>
					  		<section className="email"> 	{/* Email Section */}
					  			<p>Email</p>
					  		</section>

					  		<input type="text" style={{width:200}} name="email"></input>		{/* Email input box */}

					  		<section className="pass">		{/* Password Section */}
					  			<p>Password</p>
					  		</section>

					  		<input type="password" id="pass" style={{width:200}} name="password" minlength="8" required></input>		{/* Hidden input Password */}
						</form>
						 <br></br>
						 <section  className="logged-In"> 		{/* Keep me Logged in */}
							<input type="checkbox" name="logged-in?"></input>Keep me logged in
						</section>
						<br></br>
						<br></br>
						<input type="submit" style={{width:210}} value="Lets Go!"></input>		{/* Submit */}
			  			<br></br>
			  			<br></br>
			  		</main>
			  		<section className="signUp-text">		{/* Create an Account Section*/}
			  			<span>
			  				Don’t have an account?
			  			</span>
			  			<span>
			  				<Link class = "signUp-link" to='/signup' title= "Join Us!">Sign Up!</Link>
			  			</span>
			  		</section>
		  	</article>
	  	</div>
	  );
	}
}

export default Login;