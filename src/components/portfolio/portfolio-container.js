import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State & Lifecycle hooks- used by class component
    constructor(){
        super();
        console.log("Portfolio Container has rendered")
    }

    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe", "Swingaway"];

        return data.map(item => {
            return <PortfolioItem/>;
        })
    }
    render() {
        return (
            <div>
                <h2> Portfolio items go here... </h2>

                {this.portfolioItems()}
            </div>
        );
    }
}
