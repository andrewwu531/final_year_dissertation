import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import OrderPageView from './containers/order_page/OrderPageView';
import Login from './containers/Login';
import Signup from './containers/Signup';


// <Route exact path='/' component={ArticleList} />{" "}
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />{" "}
        <Route exact path='/articles/:articleID/' component={ArticleDetail} />{" "}
        <Route exact path='/login/' component={Login} />{" "}
        <Route exact path='/signup/' component={Signup} />{" "}
        <Route exact path='/restaurant0' component={OrderPageView} />{" "}
    </div>
);

export { BaseRouter };