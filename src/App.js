import React, { Component }  from 'react'
import './App.css';
import FragmentDemo from './Component/FragmentDemo'
import Table from './Component/Tables'

class App extends Component {
  render(){
  return (
    <div className="App">
        {/*<FragmentDemo/>*/}
        <Table/>
    </div>
  );
  }
}

export default App;
