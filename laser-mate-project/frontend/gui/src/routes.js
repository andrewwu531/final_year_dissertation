import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import OrderPageView from './containers/order_page/OrderPageView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleDetail} />
        <Route exact path='/restaurant0' component={OrderPageView} />
    </div>
);

export { BaseRouter };