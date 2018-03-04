import React from "react"
import Preview from "../components/preview.js"

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
    return (
      <div className="listview-container">
        {this.state.listings.map(item => {
            return <Preview
              key={item.id}
              id={item.id}
              name={item.shortname}
              location={item.location.city}
              sport={item.subcategory}
              supporters={item.supporters}
              point={item.points}
            />
        })}
      </div>
    )
  }
}
