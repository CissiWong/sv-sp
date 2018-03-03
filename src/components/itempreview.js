import React from "react"

export default class ItemPreview extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
      </div>
    )
  }
}
