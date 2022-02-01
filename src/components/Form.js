import React, { Component } from 'react'
import '../styles/Form.css'

class Form extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  addNewIdea = event => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description
      // or ...this.state (spreads in the 'title' and 'description' properties)
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {
    return(
      <form className="form">
        <input 
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={(event) => this.handleChange(event)}
          />
        <input 
          type="text"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={(event) => this.handleChange(event)}
          />
          <button onClick={(event) => this.addNewIdea(event)}>Submit</button>
      </form>
    )
  }
}

export default Form