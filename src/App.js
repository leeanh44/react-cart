import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Contact from './components/end-user/Contact';
import About from './components/end-user/About';
import EndUser from './layouts/EndUser';
import ManagerSystem from './layouts/ManagerSystem';
import Lists from './components/manager-system/product/Lists';
import Create from './components/manager-system/product/Create';

class App extends Component {
    render() {
        return (
            <Router>
                {/* <Header /> */}
                    <Switch>
                        <Route path="/end-user" exact={false} component={ EndUser } />
                        <Route path="/system" exact={false} component={ ManagerSystem } />
                        {/* <Route path="/end-user/contact" exact={false} component={ Contact } />
                        <Route path="/end-user/about" exact={false} component={ About } /> */}
                        {/* <Route path="/system/product/list" exact={false} component={ Lists } />
                        <Route path="/system/product/create" exact={false} component={ Create } /> */}
                        { this.showContentMenus(routes) }
                    </Switch>
                    {/* <Footer /> */}
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if(routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }

        return result;
    }
}

export default App;
