import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import HomeView from "../views/homeview.js"
import View from "../components/view.js"

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/foreningar/:id" exact component={View} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
