import React from 'react'
import Table from './Components/Table'
import TestCase from './Components/TestCase'
import './App.css'
import { render } from '@testing-library/react'

function App() {
  function clickHandler() {
    render(<TestCase />)
  }

  return (
    <div>
      <div className="contain">
        <Table />
        <TestCase />
      </div>
      <div className="contain"></div>
      <button onClick={clickHandler} className="plusButton">
        +
      </button>
    </div>
  )
}

export default App
