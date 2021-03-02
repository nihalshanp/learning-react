import React from 'react'

const Child = props => {
  return (
    <div> 
        <button onClick={() => props.greetHandler('Child')}> Great Parent</button>
    </div>
    )
}

export default Child;