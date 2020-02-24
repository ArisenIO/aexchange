import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section className="height-100 bg-gradient-3">
            <img src="assets/img/header-17.jpg" alt="bg" className="bg-image opacity-10" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9">
                        <div className="card py-3 shadow-lg">
                            <a href="/" className="d-flex justify-content-center">
                                <img src="/assets/img/arisen/arisenLogo.png" className="w-25" alt="logo" />
                            </a>
                            <div className="card-body">
                                <h1 className="h2 text-center">Welcome back</h1>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Arisen Username</label>
                                        <input id="email" type="email" className="form-control" placeholder="Enter Arisen username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">BitShare Username</label>
                                        <input id="email" type="email" className="form-control" placeholder="Enter BitShare username" />
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="password" className="text-dark">Password</label>
                                            <small>
                                                <a href="#">Forgot password?</a>
                                            </small>
                                        </div>
                                        <input id="password" type="password" className="form-control" placeholder="Enter your password" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-block btn-lg btn-primary" type="submit">Log in</button>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Keep me logged in</label>
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center text-small mt-3">
                                    <span>Don't have an account? <Link to="/signup">Sign up here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}