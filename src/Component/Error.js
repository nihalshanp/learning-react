import React, { Component } from 'react'

export default class Err extends Component {
    
    constructor(){
        super()
        this.state={
            hasErr: false
        }
    }
    
    static getDerivedStateFromError(err){
        return {
            hasErr: true
        }
    }
    
     componentDidCatch(err, info){
         console.log(err);
         console.log(info);
     }
    
    render() {
            if (this.state.hasErr) {
                return <h1> Somthing went wrong </h1>
            }
            return this.props.children
    }
}
