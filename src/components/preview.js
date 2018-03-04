import React from "react"
import { Link } from "react-router-dom"

export default class Preview extends React.Component {

  render() {
    return(
      <div>
        <Link to={`/foreningar/${this.props.id}`}>
          <p>{this.props.name}</p>
          <p>{this.props.location}</p>
          <p>{this.props.sport}</p>
        </Link>
      </div>
    )
  }
}
