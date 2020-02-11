import React from 'react';
import './status.css';


class Status extends React.Component {
	render(){
	 //{console.log(this.props.user)}
	  return (
			<div>
				<div className="app-status">
					<h1>Application Status: {this.props.user.status}</h1>
				</div>
			</div>
        );
	}
}
export default Status;