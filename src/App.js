import React from 'react';
import './App.css';
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dataForm from "./assets/dataform";

import Navbar from "./components/Navbar";
import ListAll from "./components/ListAll";
import ListOne from "./components/ListOne";
import Save from "./components/Save";
import Delete from "./components/Delete";
import Increase from "./components/Increase";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
        <Route path="/increase">
            <Increase></Increase>
          </Route>
        <Route path="/delete">
            <Delete></Delete>
          </Route>
          <Route path="/save">
            <Save dataForm={dataForm}></Save>
          </Route>
          <Route path="/update">
            <Update dataForm={dataForm}></Update>
          </Route>
        <Route path="/list">
            <ListOne></ListOne>
          </Route>
          <Route path="/">
            <ListAll></ListAll>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;