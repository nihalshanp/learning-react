import React from 'react';

const withCounter = (WrappedComponent, incrementNum) => {
    
    class WithCounter extends React.Component {
        
        constructor(){
            super()
           this.state={
            count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { 
                    count: prevState.count + incrementNum ? incrementNum : 1
                }
            })
        }
        
        render(){
            return <WrappedComponent
            incrementCount={this.incrementCount}
            count={this.state.count}
            {... this.props}/>
        }
    }
    
    return WithCounter
}

export default withCounter