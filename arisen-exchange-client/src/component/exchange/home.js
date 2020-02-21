import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-gradient-2">
                    <img src="assets/img/header-1.jpg" alt="header" className="bg-image opacity-10" />
                    <div className="container height-md-20">
                        <div className="row">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb p-0 bg-dark bg-transparent">
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="index.html">Overview</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="inner-knowledgebase.html">Knowledgebase</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">Getting Started</a>
                                        </li>
                                    </ol>
                                </nav>
                                <h1 className="display-4 text-white">
                                    Article Title
                                </h1>
                                <p className="lead mb-0 text-white">
                                    Provide a brief description of the help article here outlining what the user will learn.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-xl-3 sidebar">
                                <div className="mb-3">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <img src="assets/img/avatar-male-4.jpg" alt="Avatar" className="avatar avatar-sm" />
                                                <span>by <a href="#">Luke Freeman</a></span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <span>Created:</span>
                                                <span className="text-dark">July 9 2018</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <span>Updated:</span>
                                                <span className="text-dark">Yesterday</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sticky-top mb-3 mb-lg-0">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item"><a href="" className="nav-link active">Getting Started</a></li>
                                        <li className="nav-item"><a href="" className="nav-link">Domains</a></li>
                                        <li className="nav-item"><a href="" className="nav-link">Payment Settings</a></li>
                                        <li className="nav-item"><a href="" className="nav-link">Manage Account</a></li>
                                        <li className="nav-item"><a href="" className="nav-link">Mailboxes</a></li>
                                        <li className="nav-item"><a href="" className="nav-link">API Integration</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}