import React from 'react'
import './burger.css'

class Burger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: true
    }

    this.menuRef = React.createRef()

    this.show = () => {
    	if (this.state.opened) {
    		this.menuRef.current.style.transform = 'translateX(-300px)'
    	} else {
    		this.menuRef.current.style.transform = 'translateX(0px)'
    	}
  		this.setState({
  			opened: !this.state.opened
  		})
  	}
  }

  render () {
    return (
      <div className='menu-wrapper'>
        <div className='burger' onClick={this.show} />
        <div className='menu' ref={this.menuRef}>
          <div className='burger' onClick={this.show} />
          	<div className='contentWrapper'>
            {this.props.children}
          	</div>
        </div>
      </div>
    )
  }
}

export default Burger
