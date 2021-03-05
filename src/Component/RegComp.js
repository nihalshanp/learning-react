import React, { Component } from 'react'

export default class RagComp extends Component {
    render() {
        console.log('Reg Comp render');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}
