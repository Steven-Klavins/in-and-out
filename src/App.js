import React from 'react'
import Table from './Components/Table'
import TestCase from './Components/TestCase'
import './App.css'

function App() {
  return (
    <div>
      <Table />
      <TestCase />
      <button className="plusButton">+</button>
    </div>
  )
}

export default App
