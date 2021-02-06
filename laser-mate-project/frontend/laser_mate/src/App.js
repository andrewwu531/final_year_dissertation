import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPage from './containers/mobile_web/1FirstPage';
import FirstPagev1 from './containers/mobile_web/FirstPagev1';
import Order_Summary from './containers/mobile_web/3Order_Summary';
import Payment_Portal from './containers/mobile_web/4Payment_Portal';
import Not_Found from './containers/mobile_web/5NotFound';
import Home from './containers/web/Home';
import Contact_Us from './containers/web/Contact_Us';
import './sass/main.scss';


const App = () => (
    <Router>
        <Switch> 
            <Route exact path='/:restaurant_id/:table_number' component={FirstPage} />
            <Route exact path='/' component={Home} />
            <Route component={Not_Found} />
        </Switch> 
    </Router>
);

export default App;
