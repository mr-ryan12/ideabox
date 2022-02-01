import React from 'react'
import '../styles/Card.css'

const Card = ( { title, description, id } ) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>🗑</button>
    </div>
  )
}

export default Card