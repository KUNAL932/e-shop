import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"
// import { PrivateRoutes } from './auth/helper/PrivateRoutes';
import Home from "./core/Home"
import Signup from './user/Signup';

class Routes extends Component {
    render() { 
        return ( <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>

                {/* <PrivateRoutes path="/s"exact component={} /> */}
            </Switch>
            </BrowserRouter> );
    }
}
 
export default Routes;