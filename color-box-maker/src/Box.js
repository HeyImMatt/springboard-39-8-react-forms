import React from 'react';

function Box({width, height, boxBackgroundColor}) {
  return (
    <div 
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: `${boxBackgroundColor}`
    }}>
    </div>
  )
}

export default Box;