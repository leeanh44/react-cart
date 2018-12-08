import React, { Component } from 'react';
import ProductsContainer from './../containers/ProductsContainer';
import MessageContainer from './../containers/MessageContainer';
import CartContainer from './../containers/CartContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../components/end-user/Contact';
import About from '../components/end-user/About';
import ShoppingContainer from '../containers/ShoppingContainer';
import Login from '../components/end-user/Login';

class EndUser extends Component {
    render() {
        return (
            
            <div className="App">
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Route path="/end-user/contact" exact={false} component={ Contact } />
                        <Route path="/end-user/about" exact={false} component={ About } />
                        <Route path="/end-user/login" exact={false} component={ Login } />
                        <Route path="/end-user/shopping" exact={false} component={ ShoppingContainer } />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default EndUser;