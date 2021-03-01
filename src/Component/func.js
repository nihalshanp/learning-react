import React from 'react'

const Hello = props => {
  const {name, age} = props
  // jsx
  return (
    <div>
      <h4> I'm {name}. My age is {age}</h4>
      {props.children}
    </div>
  )

  // without jsx
  // return React.createElement('div', {
  //   id: 'dHello', className: 'dc_Hello'
  // }, React.createElement('h1', null, 'Hello world!!'))


}

export default Hello