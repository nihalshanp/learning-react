import React, { Component }  from 'react'
import './App.css';
import ClickCounterTow from './Component/ClickCounterTow'
import HoverCounterTow from './Component/HoverCounterTow'
import User from './Component/User'
import Counter from './Component/Counter'

class App extends Component {
  render(){
  return (
    <div className="App">
    
        <Counter>
        {(count, incrementCount) => (
            <ClickCounterTow count={count} incrementCount={incrementCount}/>
        )}
        </Counter>
        <Counter>
        {(count, incrementCount) => (
                <HoverCounterTow count={count} incrementCount={incrementCount}/>
            )}
            </Counter>
        
       {/* <ClickCounterTow/>
        <HoverCounterTow/>
        <User name={(isLoggedin) => isLoggedin ? 'Nihal shan' : 'Guest'}/>*/}
    </div>
  );
  }
}

export default App;
                                                                                                                                                                                                                        