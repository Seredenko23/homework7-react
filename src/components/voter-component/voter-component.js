import React from 'react'
import './voter-component.css'

class Voter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      votes: 0
    }

    this.vote = (v) => {
      this.setState({
        votes: this.state.votes + v
      })
    }
  }

  render () {
    return (
      <div className='voter'>
        <a href='#' className='vote-btn' onClick={() => this.vote(-1)}>-</a>
        <span className='voteCounts'>{this.state.votes}</span>
        <a href='#' className='vote-btn' onClick={() => this.vote(1)}>+</a>
      </div>
    )
  }
}

export default Voter
