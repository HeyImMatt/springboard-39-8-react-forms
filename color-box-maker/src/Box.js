import React from 'react';
import './Box.css'

function Box({width, height, boxBackgroundColor}) {
  return (
    <div 
    className='Box'
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: `${boxBackgroundColor}`
    }}>
    </div>
  )
}

export default Box;