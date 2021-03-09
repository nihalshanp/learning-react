import React, { Component } from 'react'
//import RegComp from './RegComp'
//import PureComp from './PureComp'
import MemoComp from './MemoComp'



class ParComp extends Component {

    constructor(){
        super()
        this.state = {
            name: 'Nihal'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Nihal'
            })
        }, 2000);
    }
    
    render() {
        console.log('----- parent comp render -----');
        return (
            <div>
                Parent Component
                {/*<RegComp name={this.state.name}/>*/}
                {/*<PureComp name={this.state.name}/>*/}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}


export default ParComp;