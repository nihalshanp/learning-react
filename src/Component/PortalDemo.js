import React from 'react'
import ReactDOM from 'react-dom'
const Portals = () => {
  return ReactDOM.createPortal(
    <h1>  Portals Demo </h1>,
    document.getElementById('portal-root')
    )
}

export default Portals;