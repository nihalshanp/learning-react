import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    
        constructor(props){
        super(props)
        this.state={
            name: 'Nihal shan.p'
        }
        console.log('LifecycleA constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }
    
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }
    
    chageState= () => {
        this.setState({
            name: 'Button Clicked'
        })
    }
    
    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <button onClick={this.chageState}>Click me</button>
                {this.state.name}
                <LifecycleB/>
            </div>
        )
    }
}
