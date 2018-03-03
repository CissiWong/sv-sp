import React from "react"
import ItemPreview from "../components/itempreview.js"

export default class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      associations: []
    }
  }

    componentDidMount() {
      fetch(`http://localhost:3000/foreningar`).then(response => (
        response.json()
      )).then(json => {
        console.log("this is the json", json)
        this.setState({
          associations: json
        })
      })
    }

  render() {
    return (
      <div>
        {this.state.associations.map(item => {
          return <ItemPreview
            name={item.shortname}
            location={item.location.city}/>
        })}
      </div>
    )
  }
}
