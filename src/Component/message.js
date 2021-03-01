import React, { Component } from 'react'

class Message extends Component {
  constructor(){
    super()
    this.state = {
      message : 'Welcom Nihal shan.p'
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
export default Message