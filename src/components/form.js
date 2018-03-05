import React from "react"

// styles //
import "./form.css"

export default class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      longname: "",
      subcategory: "",
      zipcode: "",
      city: "",
      address: "",
      homepage: ""
    }
  }

  handleInputChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClose = () => {
    this.props.close(this.props.checked)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewListing(this.state)
    console.log("this is moving to listview", this.state)
    this.setState({
      longname: "",
      subcategory: "",
      zipcode: "",
      city: "",
      address: "",
      homepage: ""
    })
  }

   render() {
    return(
      <form>
        <input
          className="close"
          name="close"
          id="close"
          type="checkbox"
          onChange={this.handleClose} />
        <label htmlFor="close"></label>
        <label>
          <input
            name="longname"
            type="text"
            placeholder="Föreningsnamn"
            value={this.state.longname}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <input
            name="subcategory"
            type="text"
            placeholder="Sport"
            value={this.state.subcategory}
            onChange={this.handleInputChange}/>
        </label>
        <label>
          <input
            name="zipcode"
            type="number"
            placeholder="Postnummer"
            value={this.state.zipcode}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <input
            name="city"
            type="text"
            placeholder="Ort"
            value={this.state.city}
            onChange={this.handleInputChange}/>
        </label>
        <label>
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={this.state.adress}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <input
            name="homepage"
            type="url"
            placeholder="Address till hemsida"
            value={this.state.homepage}
            onChange={this.handleInputChange} />
        </label>
        <button
          type="submit"
          onClick={this.handleSubmit}>Lägg till</button>
      </form>
    )
  }
}
