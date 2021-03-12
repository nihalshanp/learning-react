import React, { Component }  from 'react'
import './App.css';
import ComponentC from './Component/ComponentC'
import { UserProvider } from './Component/userContext'

class App extends Component {
  render(){
  return (
    <div className="App">
            <ComponentC/>
        {/*<UserProvider value="Nihal">
        </UserProvider>*/}
    </div>
  );
  }
}

export default App;