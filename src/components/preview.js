import React from "react"
// import { Link } from "react-router-dom"

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

  handleCheck = () => {
    this.props.remove(this.props.id)
  }

  render() {
    return (
        <div className="preview-container">
          <div className="preview-box">
            <h4>{this.props.longname}</h4>
            <p>{this.props.sport}</p>
            <input
              className="complete"
              value={this.props.id}
              type="checkbox"
              onChange={this.handleCheck} />
              <div className="dropdown">
                <h3 onClick={this.handleClick}> > </h3>
              </div>
          </div>
            <div className={this.state.down ? "down" : "up"}>
              <p>Poäng: {this.props.point}</p>
              <p>Supporters: {this.props.supporters}</p>
            </div>
        </div>
    )
  }
}
