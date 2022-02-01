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

  deleteIdea = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)

    this.setState({
      ideas: filteredIdeas
    })
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        {/* {!this.state.ideas.length && <h2>No ideas yet! Please add some!</h2>} */}
        <Form addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
        {!this.state.ideas.length ? <h2>No ideas yet! Please add some!</h2> : null}
      </main>
    )
  }
}

export default App
