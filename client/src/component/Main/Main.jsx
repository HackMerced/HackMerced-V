import React from "react";
import { Switch, Route } from "react-router-dom"; //Switch and Route Library
import Routes from "../../routes/index.jsx/index.js";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        {" "}
        {/* basic switch statement */}
        <nav>
          {Routes.map(route => {
            return (
              <Route
                key={route.path} // Key is unique child element identifier, implemented this because we are mapping
                exact
                path={route.path} // pulls the 'path' section from repsective object in the JSON array
                component={route.component} // pulls the 'component' to load from repsective object in the JSON array
              />
            );
          })}
        </nav>
      </Switch>
    );
  }
}

export default Main; //rending Main webpage
