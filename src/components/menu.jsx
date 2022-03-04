import './App.css';
import React from 'react';
import Inicio from './components/inicio';
import Registrar from './components/registrar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
const Menu = () => {
    return (
        <Router>
            <MenuLink
                activeOnlyWhenExact={true}
                to="/inicio"
                label="Inicio"
            />
            <MenuLink to="/registrar" label="Registrar" />
            <Switch>
                <Route exact path="/inicio">
                    <Inicio />
                </Route>
                <Route path="/registrar">
                    <Registrar />
                </Route>
            </Switch>
        </Router>
    );
}
export default Menu;
function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return (
        <div className={match ? "registrar" : "inicio"}>
            <Link to={to}>{label}</Link>
        </div>
    );
}