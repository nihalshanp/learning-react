import React, { Component } from 'react'

export default class Class extends Component {
    render() {
      const {name, age} = this.props
        return (
            <div>
                <h4> Welcome {name}. I hope your age is {age}</h4>
            </div>
        )
    }
}
