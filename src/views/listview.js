import React from "react"
import Preview from "../components/preview.js"
import View from "../components/view.js"

// //data dummy //
// import data from "../data/data.json"


export default class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/foreningar").then(response => (
      response.json()
    )).then(json => (
      this.setState({
         listings: json
      })
    ))}


  render() {
    console.log("getting id", this.state.listings)
    return (
      <div>
        {this.state.listings.map(item => {
            return <Preview
              key={item.id}
              id={item.id}
              name={item.shortname}
              location={item.location.city}
              sport={item.subcategory}
              supporters={item.supporters}
              point={item.points}
              data={this.state.listings}
            />
        })}
      </div>
    )
  }
}
