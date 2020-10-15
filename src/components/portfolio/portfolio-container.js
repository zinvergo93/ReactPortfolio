import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State & Lifecycle hooks- used by class component
    constructor(){
        super();
        console.log("Portfolio Container has rendered")
    }
    render() {
        return (
            <div>
                <h2> Portfolio items go here... </h2>

                <PortfolioItem/>
            </div>
        );
    }
}
