import React, { Component } from 'react';
import loginImage from "../../../static/assets/images/auth/login.jpg"
export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div className = "auth-page-wrapper">
            <div 
            className="left-column"
            style={{
                backgroundImage: `url(${loginImage})`
            }}
            />

            <div className="right-column">
                <h1> Login Component goes here</h1>
            </div>

        </div> 
        );
    }
};