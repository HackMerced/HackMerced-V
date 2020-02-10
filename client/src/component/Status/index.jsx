import React from 'react';
import './status.css';


class Status extends React.Component {
	render(){
	 //{console.log(this.props.user)}
	  return (
        <div id="Registration">
			<div className="dash">
				<div className="status">
					<h1>Your Status: </h1>
					<h2>{this.props.user.myStatus}</h2>
				</div>
			</div>
		</div>
                
        );
	}
}
export default Status;