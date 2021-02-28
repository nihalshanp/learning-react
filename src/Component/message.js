import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

export default class Message extends Component {
  constructor(){
    super()
    this.state = {
      message : 'Welcom visitor'
    }
  
}
changeMessage(){
  this.setState({
    message: 'You are sucssesfully chamged this Message'
  })
}
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()} >Change Message</button>
      </div>
    )
  }
}