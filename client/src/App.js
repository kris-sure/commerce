import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderController from "./Components/Common/Header/HeaderController";
import LandingController from "./Components/Home/Landing/LandingController";
import CatalogController from "./Components/Catalog/Catalog/CatalogController";
import AboutController from "./Components/Common/About/AboutController";
import ContactsController from "./Components/Common/Contacts/ContactsController";
import DetailController from "./Components/Catalog/Detail/DetailController";
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css';

export default class App extends React.Component {

    render() {
        loadProgressBar();
        return (
            <Router>
            <div className="main">
                <div className="container-fluid">
                    <HeaderController />
                </div>
                <Switch>
                    <Route exact path='/' component={LandingController} />
                    <Route exact path='/catalog' component={CatalogController} />
                    <Route exact path='/detail/:id' component={DetailController} />
                    <Route exact path='/about' component={AboutController} />
                    <Route exact path='/contacts' component={ContactsController} />
                </Switch>
            </div>
            </Router>
    )
    }
}
