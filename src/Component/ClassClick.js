import React, {Component} from 'react'

export default class ClassClick extends Component {
    ClassClick(){
        console.log('button Clicked');
    }
    render(){
        return(
            <div>
                <button onClick={this.classClick}>Click me</button>
            </div>    
    )
    }
}