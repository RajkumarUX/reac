import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class Header extends Component {
    render() {
        var logoStyle = {
            width: '200px',
            margin: '15px'
        }
        return(
              <nav>
                <div className="nav-wrapper  white ">
                <a href="#" className="brand-logo">
                    <img style={logoStyle} src="https://qa.driveshack.com/sites/default/files/2018-01/drive%20logo.png" /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down grey">
                        <li class="green"><NavLink to="/">Home</NavLink></li>
                        <li class="blue"> <NavLink to="/about">About Us</NavLink></li>
                        <li class="indigo"><NavLink to="/topics">Topics</NavLink></li>
                        <li class="black"><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

