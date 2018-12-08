import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        var { txtUsername, txtPassword } = this.props;
        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }
        
    }

    render() {
        var { txtUsername, txtPassword } = this.props;
        let user = localStorage.getItem('user');
        if (user !== null){
            // <Redirect to="/end-user" />
        }
        return (
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin" onSubmit={ this.onSubmit } autoComplete="off">
                                <div className="form-label-group">
                                    <input type="text" id="inputUserName" className="form-control" 
                                        placeholder="User name" 
                                        required 
                                        autoFocus
                                        name="txtUsername"
                                        value={ txtUsername }
                                        onChange={this.onChange}
                                    />
                                    <label htmlFor="inputEmail">User name</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                                        name="txtPassword"
                                        value={ txtPassword }
                                        onChange={this.onChange}
                                    />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                <hr className="my-4" />
                                <button className="btn btn-lg btn-danger btn-block text-uppercase" type="submit"><i className="fa fa-google-plus"></i> Sign in with Google</button>
                                <button className="btn btn-lg btn-info btn-block text-uppercase" type="cancel"><i className="fa fa-facebook"></i> Sign in with Facebook</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;