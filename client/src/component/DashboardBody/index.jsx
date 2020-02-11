import React from 'react';
import './dashboardbody.scss';
import { Link, Redirect } from "react-router-dom"; //Links Library from React Router
import Logo from "../HackM-Logo/";
import Status from "../Status";

class DashboardBody extends React.Component {
	render(){
	  return (
          <div id="DashboardBody">
			          <div className="dash-Container">
                  <Logo/>
                  <div className="dash-Wel">
                    <p>Welcome, {this.props.user.firstName}</p>
                  </div>
                  <Status user={this.props.user}/>
                  <button>
                      <Link to="/signup" title="Join Us!">Edit Application </Link>
                  </button>  
                </div>
            </div>
       );
	}
}
export default DashboardBody;