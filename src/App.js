import React, { Component } from 'react'
import Ideas from './components/Ideas'
import Form from './components/Form'
import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = idea => {
    this.setState({
      ideas: [...this.state.ideas, idea]
    })
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        {/* {!this.state.ideas.length && <h2>No ideas yet! Please add some!</h2>} */}
        {!this.state.ideas.length ? <h2>No ideas yet! Please add some!</h2> : null}
        <Form addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas}/>
      </main>
    )
  }
}

export default App
