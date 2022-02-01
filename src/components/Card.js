import React from 'react'
import '../styles/Card.css'

const Card = ( { title, description, id, deleteIdea } ) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card