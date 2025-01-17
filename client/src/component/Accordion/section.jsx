import React, { Component } from "react";
import PropTypes from "prop-types";
import "./section.scss";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div key={label}>
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <div className="line noselect">
              {!isOpen && <span className="bullet">&#9679;</span>}
              {isOpen && <span className="bullet">&#9679;</span>} {label} {/* &#9679; */}
            </div>
          </div>
        </div>
        {isOpen && <div className="line2">{this.props.children}</div>}
      </div>
    );
  }
}

export default AccordionSection;
