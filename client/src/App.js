import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"; //Switch and Route Library

import Footer from './component//Footer/Footer.jsx';
import NavigationBar from './component/Header/NavigationBar.jsx'
import Routes from './routes';

class App extends Component {
  render() {
    const App = () => (
      <div id="main">
        <Switch>
          {Routes.map(route => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            )
          })}
        </Switch>
      </div>
    )

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
