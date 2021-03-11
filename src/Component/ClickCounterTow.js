import React, { Component } from 'react'

export default class ClickCounterTow extends Component {
    
    render() {
        
        const { count, incrementCount } = this.props
        
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}