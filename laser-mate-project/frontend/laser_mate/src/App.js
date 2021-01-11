import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Meals from './containers/mobile_web/1Meals';
import Meal from './containers/mobile_web/2Meal';
import Order_Summary from './containers/mobile_web/3Order_Summary';
import Payment_Portal from './containers/mobile_web/4Payment_Portal';
import Not_Found from './containers/mobile_web/5NotFound';
import Home from './containers/web/Home';
import Contact_Us from './containers/web/Contact_Us';
import './sass/main.scss';
import Figma_Examples from './containers/mobile_web/Figma_Examples';


const App = () => (
    <Router>
        <Switch> 
            <Route exact path='/:restaurant_id/:table_number' component={Meals} />
            <Route exact path='/r-id/details' component={Meal} />
            <Route exact path='/' component={Home} />
            <Route exact path='/:restaurant_id' component={Figma_Examples} />
            <Route component={Not_Found} />
        </Switch> 
    </Router>
);

export default App;
