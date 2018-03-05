import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import HomeView from "../views/homeview.js"

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
