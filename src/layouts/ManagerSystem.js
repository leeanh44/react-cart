import React, { Component } from 'react';
import ProductsContainer from './../containers/manager-system/ProductsContainer';
import Header from '../components/manager-system/Header';
import Lists from '../components/manager-system/product/Lists';
import Create from '../components/manager-system/product/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ManagerSystem extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Route path="/system/product/list" exact={false} component={ Lists } />
                <Route path="/system/product/create" exact={false} component={ Create } />
                {/* <ProductsContainer /> */}
            </div>
        );
    }
}

export default ManagerSystem;