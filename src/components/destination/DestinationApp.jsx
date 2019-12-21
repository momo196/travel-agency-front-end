import React from 'react' ;
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Destination from './Destination';
const DestinationApp = () => (
    <Router>
    <>
        <h1>Instructor Application</h1>
        <Switch>
            <Route path="/destinations" exact component={Destination} />
            <Route path="/destination/:id"  />
        </Switch>
    </>
</Router>
                                            
);



export default DestinationApp ;