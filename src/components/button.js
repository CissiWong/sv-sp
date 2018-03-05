import React from "react"

import Form from "../components/form.js"

export default class Button extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisible: false
    }
  }

  handleClick = () => {
    this.setState({
      formVisible: !this.state.formVisible
      })
    }


  handleForm = () => {
    if (this.state.formVisible) {
      console.log("yes form")
      return <Form handleNewListing={onNewListing}/>
    } else {
      console.log("no form")
      return null
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}>Lägg till förening</button>
          <div>{this.handleForm()}</div>
      </div>

    )
  }
}
