import React, { Component } from 'react';
import axios from 'axios';

class PortfolioManager extends Component {
    constructor() {
        super();
        this.state = { 
            portfolioItems: []
         }
         
         this.grabPortfolioItems = this.grabPortfolioItems.bind(this);
         this.mapPortfolioItems = this.mapPortfolioItems.bind(this);
    }

    
    grabPortfolioItems() {
        axios
        .get("https://zinvergocode.devcamp.space/portfolio/portfolio_items", {withCredentials: true})
        .then(response => {
          console.log("response data", response);
          this.setState({
              portfolioItems: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
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
                <h1>Portfolio form ...</h1>
            </div>
            <div className = "right-column">
                <h3>Portfolio <br></br> Sidebar</h3>
            </div>
            
            <div>{this.mapPortfolioItems()}</div>
        </div> );
    }
}
 
export default PortfolioManager;