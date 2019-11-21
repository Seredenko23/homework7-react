import React from 'react'
import './burger.css'

class Burger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false
    }
  }

  render () {
    return (
      <div className='menu'>
        <div className='cross' />
      </div>
    )
  }
}

export default Burger
