import React from "react"
import Preview from "../components/preview.js"

// styles //
import "./listview.css"

// import Button from "../components/button.js"
import Form from "../components/form.js"

export default class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [],
      formVisible: false
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

     handleNewListing = (newListing) => {
        this.setState({
        listings: [newListing, ...this.state.listings]
      })
    }

    handleClick = () => {
      this.setState({
        formVisible: !this.state.formVisible
        })
      }

    handleRemoveListing = (id) => {
      const newListings = [...this.state.listings]
      newListings.splice(id, 1)
      this.setState({
        listings: newListings
      })
    }


    handleForm = () => {
      if (this.state.formVisible) {
        console.log("yes form")
        return <Form
          onNewListing={this.handleNewListing}
          remove={this.handleRemove} />
      } else {
        console.log("no form")
        return null
      }
    }


  render() {
    return (
      <div>
        <div className="listview-container">
          {this.state.listings.filter((item, index) => (
            index < 3)).map(item => {
                return <Preview
                  key={item.id}
                  id={item.id}
                  longname={item.longname}
                  // city={item.location.city}
                  sport={item.subcategory}
                  supporters={item.supporters}
                  point={item.points}
                  remove={this.handleRemoveListing}
                />})}
          </div>
            <button
              className="add-button"
              onClick={this.handleClick}>Lägg till förening
            </button>
          <div>{this.handleForm()}</div>
      </div>

    )
  }
}
