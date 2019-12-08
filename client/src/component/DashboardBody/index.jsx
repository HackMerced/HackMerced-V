import React from 'react';
import './dashboardbody.css';
import { Link, Redirect } from "react-router-dom"; //Links Library from React Router

class DashboardBody extends React.Component {
	render(){
	  return (
          <div id="DashboardBody">
              <div className = "dash2">
			          <div className="dashboard-body">
			  		        <h2>Welcome, {this.props.user.first}</h2>
                    <div className = "start-application">
                        <Link className="signUp-link" to="/signup" title="Join Us!">Start Application </Link>
                      </div>  
                </div>

                </div>
            </div>
       );
	}
}
export default DashboardBody;