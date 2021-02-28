import React from 'react'

const Hello = props => {
  // jsx
  return (
    <div>
      <h4> I'm {props.name}. My age is {props.age}</h4>
      {props.children}
    </div>
  )

  // without jsx
  // return React.createElement('div', {
  //   id: 'dHello', className: 'dc_Hello'
  // }, React.createElement('h1', null, 'Hello world!!'))


}

export default Hello