import React, { Component } from 'react'
import Child from './ChildComponent'

export default class Parent extends Component {
    constructor(){
        super()
        this.state = {
            parentName : 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childNane){
        alert(`Hello ${this.state.parentName} from ${childNane}`)
    }
    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}
