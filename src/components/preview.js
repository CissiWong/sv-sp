import React from "react"

export default class Preview extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.sport}</p>
      </div>
    )
  }
}
