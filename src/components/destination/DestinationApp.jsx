import React from 'react' ;
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Destination from './Destination';
const DestinationApp = () => (
    <Router>
        <div>
            
            <Switch>
                <Route path="/destination" exact component={Destination} />
                <Route path="/destination/:id"  />
            </Switch>

        </div>
    </Router>
                                            
);



export default DestinationApp ;