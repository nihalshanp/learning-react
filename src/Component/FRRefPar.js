import React, { Component } from 'react'
import FRRef from './FRRef'

export default class FRRefPar extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef()
    }
    
    buttonClick = () => {
        this.inputRef.current.focus()
    }
    
    render(){
        return (
            <div>
                <FRRef ref={this.inputRef}/>
                <button onClick={this.buttonClick}>Click me </button>
            </div>
        )
    }
}
