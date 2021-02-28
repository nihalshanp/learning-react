import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Class extends Component {
    render() {
        return (
            <div>
                <h4> Welcome {this.props.name}. I hope your age is {this.props.age}</h4>
            </div>
        )
    }
}
