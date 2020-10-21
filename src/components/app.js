import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from "./navigation/navigation-container";
import home from "./pages/home";
import about from "./pages/about";
import contact from './pages/contact';
import blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail'


export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <Router>

        <h1>Zachary Invergo Portfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <div>
          <NavigationContainer />

            <Switch>
              <Route exact path = "/" component = {home} />
              <Route path = "/about-me" component = {about} />
              <Route path = "/contact" component = {contact} />
              <Route path = "/blog" component = {blog} />
              <Route path = "/portfolio/:slug" component = {PortfolioDetail} />
            </Switch>
        </div>
      </Router>

      {/* <PortfolioContainer /> */}
      </div>
    );
  }
}
