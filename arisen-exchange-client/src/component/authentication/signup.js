import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <section className="height-100 bg-gradient-3">
            <img src="assets/img/header-17.jpg" alt="bg" className="bg-image opacity-10" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9">
                        <div className="card py-3 shadow-lg">
                            <a href="/"  className="d-flex justify-content-center">
                                <img src="/assets/img/arisen/arisenLogo.png" className="w-25" alt="logo" />
                            </a>
                            <div className="card-body">
                                <h1 className="h2 text-center">Create Account</h1>
                                <form>
                                    <div className="d-flex">
                                        <div className="form-group">
                                            <label htmlFor="email">Arisen Username</label>
                                            <input id="email" type="email" className="form-control" placeholder="Enter Arisen Username" />
                                        </div>
                                        <div className="form-group ml-2">
                                            <label htmlFor="email">BitShare Username</label>
                                            <input id="email" type="email" className="form-control" placeholder="Enter BitShare Username" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control" placeholder="Choose a password" />
                                        <small>* Password must be at least 8 characters</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Re-enter Password</label>
                                        <input id="password" type="password" className="form-control" placeholder="Choose a re-enter password" />
                                        {/* <small>* Password must be at least 8 characters</small> */}
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">I agree to the
                                                <a href="#">Terms &amp; Conditions</a>
                                            </label>
                                        </div>
                                    </div> */}
                                    <hr />
                                    <button className="btn btn-block btn-lg btn-primary" type="submit">Signup</button>
                                </form>
                                <div className="text-center text-small mt-3">
                                    <span>Already have an account? <Link to="/login">Log in here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}