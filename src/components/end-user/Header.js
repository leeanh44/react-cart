import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({title, to, exactLink}) => {
    return (
        <Route path={to} exact={exactLink} children={({macth}) => {
            return (
                <li className="nav-item">
                    <Link to={to} className="nav-link">{ title }</Link>
                </li>
            )
        }} />
    )
}
const navStyle = {
    position: 'fixed',
    top: '55px',
    width: '80%',
    zIndex: '2'
};

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={ navStyle }>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <MenuLink exactLink={false} to="/end-user" title="Home"></MenuLink>
                        <MenuLink exactLink={false} to="/end-user/about" title="About"></MenuLink>
                        <MenuLink exactLink={false} to="/end-user/contact" title="Contact"></MenuLink>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Header;