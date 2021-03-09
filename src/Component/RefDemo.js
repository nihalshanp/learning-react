import React, { Component } from 'react'

export default class RefDemo extends Component {
    
    constructor(props){
        super(props)
        //this.inputRef = React.createRef()
        this.cdRef = null
        this.setCbRef = element => {
            this.cdRef = element
        }
    }
    
    componentDidMount(){
     // this.inputRef.current.focus()
      if (this.cdRef) {
          this.cdRef.focus()
      }
    }
    
    buttonClick = () => {
        alert(this.cdRef.value)
    } 
    
    render() {
        console.log(this.inputRef);
        return (
            <div>
                <h1>Ref Demo</h1>
               {/* <input type='text' ref={this.inputRef} placeHolder='input 1'/>*/}
                <input type='text' ref={this.setCbRef} placeHolder='input 2'/>
                <br/>
                <button onClick={this.buttonClick} >Click me</button>
            </div>
        )
    }
}