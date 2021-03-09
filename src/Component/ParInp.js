import React, { Component } from 'react'
import Input from './Input'


export default class Class extends Component {
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }
    
    buttonClick = () => {
        this.componentRef.current.focusInp()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.buttonClick}>Focus Input</button>
            </div>
        )
    }
}
