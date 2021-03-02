import React, { Component }  from 'react'
//import logo from './logo.svg';
import './App.css';
//import Func from './Component/func'
//import Class from './Component/class'
// import Message from './Component/message'
// import Counter from './Component/Counter/Counter'
// import FuncClick from './Component/FuncClick'
// import ClassClick from './Component/ClassClick'
// import Child from './Component/ChildComponent'
// import Parent from './Component/ParentComponent'
import UserGreeting from './Component/UserGreeting'
class App extends Component {
  render(){
  return (
    <div className="App">
     {/*<h1> Func <br/> ---------</h1>
      <Func name="Nihal" age="13">
        <p>I like to play Football</p>
      </Func>
      <Func name="shan" age="18">
        <p>I like to use Laptop</p>
      </Func>
      <Func name="p" age="20"><p>I like to use Mobile</p></Func>
      <h1> Class <br/> ---------</h1>
      <Class name="Nihal" age="13"/>
      <Class name="Shan" age="18"/>
      <Class name="p" age="20"/>
      <Counter/>
      <FuncClick/>
      <ClassClick/>
      <Parent/>
      <Message/>*/}
      <UserGreeting/>
    </div>
  );
  }
}

export default App;
