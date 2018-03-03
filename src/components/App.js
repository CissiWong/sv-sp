import React, { Component } from 'react'
import './App.css'
import HomeView from "../views/homeview.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomeView />
      </div>
    );
  }
}

export default App;
