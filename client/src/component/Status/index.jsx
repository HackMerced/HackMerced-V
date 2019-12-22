import React from 'react';
import './status.css';


class Status extends React.Component {
	render(){
	  return (
        <div id="Registration">
			<div className="dash">
				<div className="status">
					<h1>Your Status: </h1>
					{console.log(this.props.user)}
					<h2>{this.props.user.myStatus}</h2>
				</div>
			</div>
		</div>
                
        );
	}
}
export default Status;