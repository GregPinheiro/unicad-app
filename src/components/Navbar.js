import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Table from './Table';
import Form from './Form';

class NavBar extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/entregas" className="navbar-brand">
                    UNICAD
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to={"/entregas"} className="nav-link">
                        Entregas
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                        Cadastrar Entrega
                    </Link>
                    </li>
                </div>
                </nav>

                <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/entregas"]} component={Table} />
                    <Route exact path={["/", "/add"]} component={Form} />
                    {/* <Route exact path="/add" component={AddTutorial} />
                    <Route path="/tutorials/:id" component={Tutorial} /> */}
                </Switch>
                </div>
            </div>
        )
    }
}

export default NavBar;