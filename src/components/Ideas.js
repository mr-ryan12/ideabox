import React from 'react'
import Card from './Card'
import '../styles/Ideas.css'

const Ideas = props => {
  const allIdeas = props.ideas.map(idea => {
    return (
      <Card 
        key={idea.id}
        id={idea.id}
        title={idea.title}
        description={idea.description}
        deleteIdea={props.deleteIdea}
      />
    )
  })

  return (
    <div className="ideas-container">
      {allIdeas}
    </div>
  )
}

export default Ideas