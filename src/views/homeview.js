import React from "react"
import "./homeview.css"
import ListView from "./listview.js"
import View from "../components/view.js"

export default class HomeView extends React.Component {
  render() {
    return (
      <div>
        <ListView />
      </div>
      )
    }
  }
