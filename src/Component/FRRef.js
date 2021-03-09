import React from 'react'

const FRRef = React.forwardRef((props, ref) => {
  return (
    <div>
        <input type='text' ref={ref}/>
    </div>
    )
})

export default FRRef;