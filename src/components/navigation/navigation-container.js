import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class NavigationComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() { 
        return (
            <div className = "nav-wrapper">
                <div className = "left-side">
                <NavLink exact to = "/" activeClassName = "nav-link-active">
                    Home
                </NavLink>

                <NavLink to = "/about-me" activeClassName = "nav-link-active">
                    About
                </NavLink>

                <NavLink to = "/contact" activeClassName = "nav-link-active">
                    Contact
                </NavLink>

                <NavLink to = "/blog" activeClassName = "nav-link-active">
                    Blog
                </NavLink>

                {false ? <NavLink to = "/add-blog"> Add Blog </NavLink> : null}
                </div>

                <div className="right-side"> ZAC INVERGO</div>
            </div>
        );
    };
}
 
