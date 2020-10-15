import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-container';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Zachary Invergo Portfolio</h1>
        <PortfolioContainer />

        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <br></br>
        

      </div>
    );
  }
}
