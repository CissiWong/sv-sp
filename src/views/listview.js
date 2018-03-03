import React from "react"

export default class ListView extends React.Component {

    componentDidMount() {
      const url = `http://localhost:3000/foreningar`
      fetch(url).then(response => (
        response.json()
      )).then(json => {
        console.log("this is the json", url)
      })
    }

  render() {
    return (
      <div />
    )
  }
}
