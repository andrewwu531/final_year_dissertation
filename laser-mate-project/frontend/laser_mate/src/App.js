import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import FirstPage from './containers/mobile_web/FirstPage';
import OrderSummary from './containers/mobile_web/OrderSummary';
import PaymentPortal from './containers/mobile_web/PaymentPortal';
import Not_Found from './containers/mobile_web/5NotFound';
import Test from './containers/web/Test';
import store from './store'
import './sass/main.scss';


const App = () => (
    <Provider store={store}>
        <Router>
            <Switch> 
                <Route exact path='/:restaurant_id/:table_number' component={FirstPage} />
                <Route exact path='/:restaurant_id/:table_number/order_summary' component={OrderSummary} />
                <Route exact path='/:restaurant_id/:table_number/payment_portal' component={PaymentPortal} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/' component={Not_Found} />
                <Route component={Not_Found} />
            </Switch> 
        </Router>
    </Provider>
);

export default App;
