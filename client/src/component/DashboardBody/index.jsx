import React from 'react';
import './dashboardbody.css';


class DashboardBody extends React.Component {
	render(){
	  return (
          <div id="DashboardBody">
              <div className = "dash2">
			          <div className="dashboard-body">
			  		        <h2>Welcome {this.props.user.name}!</h2>
                </div>
                     <div className = "start-application">
                        
                        <a href = "https://hackmerced.io/signUp">
                         Start Application  </a>          
                      </div>  
                </div>
            </div>
       );
	}
}
export default DashboardBody;