import React from 'react'
import Cell from './Cell'

const Line = ({width}) => {
  return (
    <div className="line">
      {[...Array(width)].map((cell, i) => 
        <Cell/>
      )}
    </div>
  )
}

export default Line