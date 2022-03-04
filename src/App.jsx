import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Registrar from './components/registrar';
import Inicio from './components/inicio';
import styled from 'styled-components'
const App = () => {
  return (
    <Router>
      <MainDiv>
        <MenuDiv>
          <MenuLink
            activeOnlyWhenExact={true}
            to="/inicio"
            label="Inicio"
          />
          <MenuLink to="/registrar" label="Registrar" />
        </MenuDiv>
        <Switch>
          <Route exact path="/inicio">
            <Inicio />
          </Route>
          <Route path="/registrar">
            <Registrar />
          </Route>
        </Switch>
      </MainDiv>
    </Router>
  );
}
export default App;
const MainDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
`;
const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  a{
    color: black;
  }
  a:hover{
    color: gray;
  }
`;
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