import React, { Component } from 'react'
import './styles/App.css'
import Ideas from './components/Ideas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }

  render() {
    return (
      <main>
        <h1 className="App">IdeaBox</h1>
        <Ideas name="Travis" />
        <Ideas name="Butts" />
        <Ideas name="Mr. Face" age={21}/>
      </main>
    )
  }
}

export default App
