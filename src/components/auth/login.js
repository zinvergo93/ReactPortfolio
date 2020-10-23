import React, { Component } from 'react';

export default class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
                <form>
                    <input type = "text"/>
                    <input type = "password"/>
                </form>
            </div>
         );
    }
}