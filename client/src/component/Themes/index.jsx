import React from "react";
import "./themes.scss";

//The theme pictures
import SOCIAL from "../../assets/Images/social good.png";
import SUSTAIN from "../../assets/Images/sustainability.png";
import HEALTH from "../../assets/Images/medical.png";

class Themes extends React.Component{
    constructor(props){
        super(props);
        this.themes = {
            titles: [
                "Social Good",
                "Sustainability",
                "Health",
            ],
            image: [
                SOCIAL,
                SUSTAIN,
                HEALTH,
            ],

            alt: [
                "social good",
                "sustainability",
                "health",
            ],
        }
    };

    displayThemes = ({titles, image, alt}) => {
    let sections = [],
        social_good = [],
        sustainability = [],
        health = [];

        for(let i = 0; i < titles.length; ++i){
            switch(sections[i]) {
                default:
                    break;
                case "Social Good": {
                    social_good.push(
                        <div className="themes" titles={titles[i]}>
                        <h3>Social Good</h3>
                        <img src={image[i]} alt={alt[i]} />
                        </div>
                    );
                    break;
                }
                case "Sustainability": {
                    sustainability.push(
                        <div className="themes" titles={titles[i]}>
                        <h3>Sustainability</h3>
                        <img src={image[i]} alt={alt[i]} />
                        </div>
                    );
                    break;
                }
                case "Health": {
                    health.push(
                        <div className="themes" titles={titles[i]}>
                        <h3>Health</h3>
                        <img src={image[i]} alt={alt[i]} />
                        </div>
                    );
                    break;
                }
            }

            social_good.forEach(item => {
                sections.push(<div id="social good">{item}</div>);
              });
          
              sustainability.forEach(item => {
                sections.push(<div id="sustainability">{item}</div>);
              });
          
              health.forEach(item => {
                sections.push(<div id="health">{item}</div>);
              });

            return sections;
        }
    }
    
    render(){
        return(
            <section id="themes">
                <h2>Themes</h2>
                {/* <div class="grid-container">{this.displayThemes(this.themes)} */}
                <div class="grid-container">
                    <div class="grid-item">
                        <h3>Social Good</h3>
                    </div>
                    <div class="grid-item">
                        <h3>Sustainability</h3>
                    </div>
                    <div class="grid-item">
                        <h3>Health</h3>
                    </div>
                    <div class="grid-item">
                        <img src={SOCIAL} />
                    </div>
                    <div class="grid-item">
                        <img src={SUSTAIN}/>
                    </div>
                    <div class="grid-item">
                        <img src={HEALTH}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Themes;