import React from 'react'
import Voter from './components/voter-component/voter-component.js'
import Burger from './components/burger/burger.js'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Burger>
        <p>Lorem Ipsum 1</p>
        <p>Lorem Ipsum 2</p>
        <p>Lorem Ipsum 3</p>
        <p>Lorem Ipsum 4</p>
        <p>Lorem Ipsum 5</p>
      </Burger>
      <Voter />
    </div>
  )
}

export default App
