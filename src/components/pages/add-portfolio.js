import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';

class PortfolioManager extends Component {
    constructor() {
        super();
        this.state = { 
            portfolioItems: [],
            portfolioToEdit: {}
         }
         
         this.grabPortfolioItems = this.grabPortfolioItems.bind(this);
         this.mapPortfolioItems = this.mapPortfolioItems.bind(this);
         this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
         this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
         this.handleDeleteClick = this.handleDeleteClick.bind(this);
         this.handleEditClick = this.handleEditClick.bind(this);
         this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this)
    }

    clearPortfolioToEdit() {
        this.setState({
            portfolioToEdit: {}
        });
    }

    handleEditClick(portfolioItem) {
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }
    handleDeleteClick(portfolioItem) {
        // console.log("handleDeleteClick", portfolioItem);
        axios.delete(
            `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, 
            { withCredentials: true }
            ).then(response => {
                this.setState({
                    portfolioItems: this.state.portfolioItems.filter(item => {
                        return item.id !== portfolioItem.id;
                    })
                });

                return response.data;
            }).catch(error => {
                console.log("handleDeleteClick error", error)
            })
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
        .get("https://zinvergocode.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials: true})
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
                clearPortfolioToEdit={this.clearPortfolioToEdit}
                portfolioToEdit = {this.state.portfolioToEdit}
                />
            </div>
            <div className = "right-column">
                <PortfolioSidebarList 
                handleDeleteClick = {this.handleDeleteClick}
                data = {this.state.portfolioItems}
                handleEditClick= {this.handleEditClick}
                />
            </div>
            
            <div>{this.mapPortfolioItems()}</div>
        </div> );
    }
}
 
export default PortfolioManager;