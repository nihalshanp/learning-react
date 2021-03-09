import React, { memo } from 'react'

const MemoComp = ({name}) => {
    console.log('Rendering Memo Component');
  return (
    <div>
        Memo Component<br/>
        {name}
    </div>
    )
}

export default memo(MemoComp)