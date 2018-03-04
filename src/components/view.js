import React from "react"

export default class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/foreningar").then(response => (
      response.json()
    )).then(json => {
      let listing = json.find(x => (x.id === parseInt(this.props.match.params.id, 10)))
      this.setState({
         listing
      })
    })}


  render() {
    return (
      <div>
        <p>Points: {this.state.listing.points}</p>
        <p>Supporters: {this.state.listing.supporters}</p>
      </div>
    )
  }
}
