import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
            <Link className="navbar-brand d-flex w-auto" to="/">
                <img src="assets/img/arisen/arisenLogo.png" className="w-50px" alt="Arisen" />
                <p className="h3 mt-auto mb-auto">Arisen</p>
            </Link>
            <div className="d-flex order-lg-3 ml-lg-2">
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/signup" className="btn btn-primary ml-2">Signup</Link>
                {/* <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
            </div>
            {/* <div className="collapse navbar-collapse justify-content-between navMenu order-lg-2">
                <div className="d-lg-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between my-1 my-lg-0">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item">
                                <a href="#" className="nav-link pr-2">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    </nav>
    )
}