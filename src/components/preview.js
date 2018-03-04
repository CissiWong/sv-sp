import React from "react"
import { Link } from "react-router-dom"

// components //
import View from "../components/view.js"

// styles //
import "./preview.css"

export default class Preview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      down: false
    }
  }

  handleClick = () => {
    console.log("Handling")
    this.setState({
      down: !this.state.down
    })
  }


  render() {
    return (
        <div className="preview-container">
            <h4>{this.props.name}</h4>
            <p>{this.props.location}, {this.props.sport}</p>
            <p onClick={this.handleClick}> > </p>
            <div className={this.state.down ? "down" : "up"}>
              <p>{this.props.point}</p>
              <p>{this.props.supporters}</p>
            </div>
        </div>
    )
  }
}
