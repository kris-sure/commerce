import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./Components/Common/Header";
import Landing from "./Components/Home/Landing";
import Catalog from "./Components/Catalog/Catalog";
import About from "./Components/Common/About";
import Contacts from "./Components/Common/Contacts";
import Detail from "./Components/Catalog/Detail";

export default class App extends React.Component {
    render() {
        return (
            <Router>
            <div className="main">
                <div className="container-fluid">
                    <Header />
                </div>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/catalog' component={Catalog} />
                    <Route exact path='/detail/:id' component={Detail} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contacts' component={Contacts} />
                </Switch>
            </div>
            </Router>
    )
    }
}
