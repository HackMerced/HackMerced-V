import React from "react";
import "./toast.scss";

class Toast extends React.Component {
  constructor(props) {
    super(props); 
   this.state = {
    message: "",
    status: null,
    }
  }

  render() {
    if(this.state.status != null){
      if(this.state.status === "error"){
        return(
        <div className="toast--error">{this.state.message}</div>
        );
      }
      if(this.state.status === "success"){
        return(
          <div className="toast--success">{this.state.message}</div>
        );
      }
      if(this.state.status === "unkown"){
        return(
          <div>"Please contact HackMerced"</div>
        );
      }
    }
  }
}

export default Toast;