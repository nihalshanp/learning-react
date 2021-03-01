import React from 'react'

const FuncClick = () => {
    function clickEvent(){
        console.log('Button Clicked')
    }
    return(
        <div>
            <button onClick={clickEvent}>Click</button>
            
        </div>
    )
}

export default FuncClick;