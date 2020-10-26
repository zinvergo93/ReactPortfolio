import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';

class PortfolioManager extends Component {
    constructor() {
        super();
        this.state = { 
            portfolioItems: []
         }
         
         this.grabPortfolioItems = this.grabPortfolioItems.bind(this);
         this.mapPortfolioItems = this.mapPortfolioItems.bind(this);
         this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
         this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error)
    }

    grabPortfolioItems() {
        axios
        .get("https://zinvergocode.devcamp.space/portfolio/portfolio_items?", {withCredentials: true})
        .then(response => {
        //   console.log("response data", response);
          this.setState({
              portfolioItems: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log("error in getPortfolio Items", error);
        });
      }

    mapPortfolioItems() {
        return this.state.portfolioItems.map(item => {
            console.log("item data", item)

        });
    }

    componentDidMount() {
        this.grabPortfolioItems();
    }

    render() { 
        return ( 
        <div className = "portfolio-manager-wrapper">
            <div className = "left-column">
                <PortfolioForm 
                handleSuccessfulFormSubmission = {this.handleSuccessfulFormSubmission}
                handleFormSubmissionError = {this.handleFormSubmissionError}
                />
            </div>
            <div className = "right-column">
                <PortfolioSidebarList data = {this.state.portfolioItems}/>
            </div>
            
            <div>{this.mapPortfolioItems()}</div>
        </div> );
    }
}
 
export default PortfolioManager;