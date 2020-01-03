import React from 'react';
import {Link} from "react-router-dom";


export default class HeaderView extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Commerce</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={'/about'} className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contacts'} className="nav-link">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
