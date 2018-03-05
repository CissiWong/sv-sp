import React from "react"

// styles //
import "./homeview.css"

// components & views //
import ListView from "./listview.js"
// import Button from "../components/button.js"


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
            <div className="circle">1</div>
          </div>
        </nav>
        <header>
          <div className="text-wrapper">
            <div className="text">
              <h1>Hjälp oss stödja idrottens rötter</h1>
              <p>Inget kan blomma utan starka rötter. Därför sponsrar vi ungdomsindrotten i Sverige.</p>
              <p>Du kan hjälpa oss!</p>
              <p>Gräsroten, för ungdomsidrotten i Sverige.</p>
            </div>
          </div>
          <div className="listing-container">
            <div className="listing-headline">
              <h4>Mina föreningar</h4>
              <p>Du kan stödja upp till 3 föreningar samtidigt.</p>
              <p>Poängen fördelas jämnt över föreningarna.</p>
            </div>
            <div className="listing-bkgrnd">
              <ListView />
            </div>
          </div>
        </header>
      </div>
      )
    }
  }
