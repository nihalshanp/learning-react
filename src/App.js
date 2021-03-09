import React, { Component }  from 'react'
import './App.css';
//import RefDemo from './Component/RefDemo'
//import ParInp from './Component/ParInp'
import FRRefPar from './Component/FRRefPar'

class App extends Component {
  render(){
  return (
    <div className="App">
        {/*<RefDemo/>
        <ParInp/>*/}
        <FRRefPar/>
    </div>
  );
  }
}

export default App;
