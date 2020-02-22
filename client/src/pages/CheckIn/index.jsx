import React, {Component} from "react";
import LOGO from "../../assets/Images/logo.png";
import "./checkin.scss"


class CheckIn extends Component {
render(){
    return (
    <section id="CheckIn">
        <div id="CheckIn-container">
        <section id="CheckIn-title">
          <div id="CheckIn-logo">
          <img src={LOGO} width="20px" alt="HackMerced Logo" />
          </div>
          
          <div id="CheckIn-text">
          Check-In!
          </div>
      
        </section>  
          <form onSubmit={this.handleSubmit}>
            <section id="email">
              <input
                required
                type="email"
                name="email"
                placeholder = "Email"
              />
            </section>
          </form>
        </div>
      </section>
    );
  }
}       

export default CheckIn;