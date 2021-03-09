import React, { Component } from 'react'

export default class RefDemo extends Component {
    
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
    buttonClick = () => {
        alert(this.inputRef.current.value)
    } 
    
    render() {
        console.log(this.inputRef);
        return (
            <div>
                <h1>Ref Demo</h1>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.buttonClick}>Click me</button>
            </div>
        )
    }
}