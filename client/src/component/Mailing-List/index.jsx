import React from "react";
import axios from "axios";

import "./mailing-list.css";

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      didUserSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const object = target.name;

    this.setState({
      [object]: value
    });
  }
  handleSubmit(event) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = this.state.email;
    if (re.test(String(email).toLowerCase())) {
      event.preventDefault();
      axios({
        method: "post",
        url: "http://localhost:3852/api/mailing",
        data: {
          name: this.state.name,
          email: this.state.email
        }
      }).then(
        response => {
          console.log(response);
          this.setState({
            didUserSubmit: true
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      event.preventDefault();
      document.getElementById("isEmailValid").style.display = "block";
    }
  }

  render() {
    const didUserSubmit = this.state.didUserSubmit;
    if (didUserSubmit) {
      return (
        <article>
          <section>
            <div className="box">
              <a className="button" href="#popup1">
                Join our mailing list
              </a>
            </div>
          </section>
          <section>
            {/* Inside popup */}
            <div id="popup1" class="overlay">
              <div className="popup">
                <h2>
                  Thank you {capitalize_Words(this.state.name)} for joining
                  HackMerced's mailing list
                </h2>
                <a className="close">
                  &times;
                </a>
              </div>
            </div>
          </section>
        </article>
      );
    } else {
      return (
        <article>
          <section>
            <div className="box">
              <a className="button" href="#popup1">
                Join our mailing list
              </a>
            </div>
          </section>
          <section>
            {/* Inside popup */}
            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>Join our E-Mail list</h2>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={this.state.value}
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.value}
                    onChange={this.handleChange}
                  ></input>
                  <button type="submit" a="sendEmail">
                    submit
                  </button>
                </form>
                <h5 id="isEmailValid" className="isEmailValid">
                  Please enter a valid email
                </h5>
                <a className="close" href="#">
                  &times;
                </a>
              </div>
            </div>
          </section>
        </article>
      );
    }
  }
}
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
export default PopUp;
