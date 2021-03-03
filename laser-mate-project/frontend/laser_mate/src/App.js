import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPage from './containers/mobile_web/1FirstPage';
import FirstPageCat2 from './containers/mobile_web/1FirstPageCat2';

import Payment_Portal from './containers/mobile_web/4Payment_Portal';
import Not_Found from './containers/mobile_web/5NotFound';
import Home from './containers/web/Home';
import Contact_Us from './containers/web/Contact_Us';
import './sass/main.scss';


const App = () => (
    <Router>
        <Switch> 
            <Route exact path='/:restaurant_id/:table_number' component={FirstPage} />
            <Route exact path='/:restaurant_id/:table_number/cat2' component={FirstPageCat2} />
            <Route exact path='/' component={Not_Found} />
            <Route component={Not_Found} />
        </Switch> 
    </Router>
);

export default App;
