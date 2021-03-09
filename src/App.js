import React, { Component }  from 'react'
import './App.css';
import RefDemo from './Component/RefDemo'
import ParInp from './Component/ParInp'

class App extends Component {
  render(){
  return (
    <div className="App">
        {/*<RefDemo/>*/}
        <ParInp/>
    </div>
  );
  }
}

export default App;
