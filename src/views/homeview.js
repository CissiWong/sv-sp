import React from "react"
import "./homeview.css"
import ListView from "./listview.js"
import View from "../components/view.js"

// assets //
import logo from "../assets/grasroten.svg"

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="homeview-container">
        <nav>
            <img src={logo} alt="" />
          <div className="user">
            <p>Christoffer</p>
            <h4>367 kr</h4>
          </div>
        </nav>
        <header>
          <div className="text">
            <h1>Hjälp oss stödja idrottens rötter</h1>
            <p>Inget kan blomma utan starka rötter. Därför sponsrar vi ungdomsindrotten i Sverige.</p>
            <p>Du kan hjälpa oss!</p>
            <p>Gräsroten, för ungdomsidrotten i Sverige.</p>
          </div>
          <ListView />
        </header>
      </div>
      )
    }
  }
