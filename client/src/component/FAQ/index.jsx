import React, { Component } from "react";

import Accordion from "../Accordion";
import LAMP_POST from "../../assets/Images/faq.png";
import "./faq.scss";

class Faqs extends Component {
  constructor(props) {
    super(props);
    this.faq = {
      questions: [
        "Who can attend?",
        "How do teams work?",
        "How much will it cost me?",
        "What can I build?",
        "What if I have no coding background?",
        "Is there anything I should bring?",
        "Where can I sleep on campus?",
        "Are there any rules?"
      ],
      answers: [
        "All undergraduate and graduate students of any major are welcome!",
        "You can be in teams of up to 4 people and it is highly encouraged to find at least one other person to participate with! If you need help forming a team, we'll help set you up with others who are looking for teammates.",
        "Admission, food and drinks are absolutely free! However, we cannot cover any travel costs.",
        "You and your team can build a project towards a theme of your choosing!",
        "We encourage you to attend as it will be a great experience for you to learn and compete! You will work with a team and can ask any of our volunteers for help! There will also be workshops during the event to help you learn how to code.",
        "Bring your ID, computer, and necessary cables! If you plan on spending the night, bring extra clothes, deodorant, toiletries, and a sleeping bag (optional)! We'll have a hardware lab in case you need hardware.",
        "In any HackMerced designated rooms! Just make sure you're comfy so you get proper rest!",
        "All attendees must follow the Major League Hacking’s code of conduct."
      ]
    };
  }

  createQNA = ({ questions, answers }) => {
    let qna = [];

    // Outer loop to create parent
    for (let i = 0; i < questions.length; i++) {
      qna.push(

        <div label={questions[i]} key={i}>

          <p className="answers">{answers[i]}</p>
        </div>

      );
    }

    return qna;
  };

  render() {
    return (
      <section id="FAQ">
        <div class="grid-container">
          <div class="grid-item">
          <h2 id="FAQ-Title">Frequently Asked Questions</h2>     
          <section id="faq-layout">
            <Accordion id="accordions" allowMultipleOpen>
              {this.createQNA(this.faq)}
            </Accordion>
          </section>
          <section id="prompt" >
            <div id="question">
              <h3>Any other questions?</h3>
            </div>
            <div id="answer">
              <p>
                Feel free to message us at:
                <a
                  href="mailto:general@hackmerced.com?subject=HackMerced Questions&body=Dear HackMerced,"
                  style={{
                    textDecoration: "none",
                    color: "#A8B6D6",
                    fontWeight: "bold",
                    padding: "0px 0px 0px 4px",
                  }}
                >
                  general@hackmerced.com
                </a>
                .
              </p>
            </div>
          </section>
          </div>

          <div class="grid-item">
            <img id="lamp"  src={LAMP_POST} alt="lamp post" />
          </div>

        </div>
      </section>
    );
  }
}

export default Faqs;
