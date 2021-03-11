import React, { Component }  from 'react'
import './App.css';
import Hero from './Component/Hero'
import Err from './Component/Error'

class App extends Component {
  render(){
  return (
    <div className="App">
        <Err>
            <Hero heroName='Superman'/>
        </Err>
        <Err>
            <Hero heroName='Batman'/>
        </Err>
        <Err>
            <Hero heroName='Joker'/>
        </Err>
    </div>
  );
  }
}

export default App;
