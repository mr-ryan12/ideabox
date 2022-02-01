import React, { Component } from 'react'
import '../styles/Ideas.css'

const Ideas = ({ name, age }) => {
  console.log(typeof age)
  return (
    <h1>Hello, {name}! You are {age ? age : 'salty'}!</h1>
  )
}

export default Ideas