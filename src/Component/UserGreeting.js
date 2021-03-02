import React, { Component } from 'react'

export default class UserGreeting extends Component {
    
    constructor(){
        super()
        this.state = {
            isLoggdin : true
        }
    }
    
    render() {
        
        return this.state.isLoggdin && <h1>Welcom Nihal</h1>
        // return (
        //     this.state.isLoggdin ?(<h1>Welcom Nihal</h1>)
        //     : (<h1>Welcom Guest</h1>)
        // )
        
        
        // let message;
        // if (this.state.isLoggdin) {
        //     message = <h1>Welcom Nihal</h1>
        // } else {
        //     message = <h1>Welcom Guest</h1>
        // }
        // if (this.state.isLoggdin) {
        //     return  <h1>Welcom Nihal</h1>
        // } else {
            
        //     return <h1>Welcom Guest</h1>
        // }
        // return (
        //     <div>
        //         <div>{message}</div>
        //     </div>
        // )
    }
}
