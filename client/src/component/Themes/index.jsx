import React from "react";
import "./themes.scss";

//The theme pictures
import SOCIALGOOD from "../../assets/Images/social good.png";
import SUSTAINABILITY from "../../assets/Images/sustainability.png";
import HEALTH from "../../assets/Images/medical.png";

class Themes extends React.Component {
  render() {
    return (
      <section id="themes">
        <h2>Themes</h2>
        <div className="grid-container">
        <img id="social-good" className="grid-item-image" src={SOCIALGOOD} alt="social good" />
          <img id="sustainability" className="grid-item-image" src={SUSTAINABILITY} alt="sustainability" />
          <img id="health" className="grid-item-image" src={HEALTH} alt="health" />
          <h3 className="grid-item-title">Social Good</h3>
          <h3 className="grid-item-title">Sustainability</h3>
          <h3 className="grid-item-title">Health</h3>
        </div>
      </section>
    );
  }
}

export default Themes;
