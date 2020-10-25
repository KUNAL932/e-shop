import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./core/Home"
class Routes extends Component {
    render() { 
        return ( <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
            </BrowserRouter> );
    }
}
 
export default Routes;