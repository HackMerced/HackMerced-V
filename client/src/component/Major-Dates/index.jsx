import React from 'react';
import './major-dates.scss';


class MajorDates extends React.Component {
	render(){
	  return (
        <div id="MajorDates">
            <div className = "dates-Container">
              <header className="date-Title">
                <h1> Upcoming Dates: </h1>
              </header>
              <article className="important-Date-gray">
                <h1> Applications Open </h1>
                <p>November 7th, 2019</p>
              </article>
              <article className="important-Date">
                <h1> Applications Close </h1>
                <p>November 29th, 2019</p>
              </article>
              <article className="important-Date-gray">
                <h1> HackMerced 2020 </h1>
                <p>Janurary 31st, 2020</p>
              </article>

			      </div>
        </div>
       );
	}
}
export default MajorDates;
