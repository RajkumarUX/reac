import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { About } from './shared/about';
import { Home } from './shared/home';
import { LoginForm } from './shared/login';
import { Topics } from './shared/topics';

export class RouterClass extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={LoginForm} />
                <Route path="/Topics" component={Topics} />
            </Switch>
        )
    }
}