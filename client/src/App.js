import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "./component/Footer";
import NavigationBar from "./component/Navigation-Bar";
import Routes from "./routes";
import "./App.scss";
import Home from "./pages/Home";

class App extends Component {
  render() {
    const App = () => (
      <div id="main">
        <Switch>
          <Route key="/" exact path="/">
            <Redirect to="/home" />
          </Route>
          {Routes.map(route => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    );

    return (
      <React.Fragment>
        <NavigationBar />
        <App />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
