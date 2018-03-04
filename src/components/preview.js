import React from "react"
import { Link } from "react-router-dom"

// styles //
import "./preview.css"

export default class Preview extends React.Component {

  render() {
    return (
        <div className="preview-container">
          <Link to={`/foreningar/${this.props.id}`}>
            <h4>{this.props.name}</h4>
            <p>{this.props.location}, {this.props.sport}</p>
          </Link>
        </div>
    )
  }
}
