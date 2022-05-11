import React from 'react'
import Cell from './Cell'

const Line = ({width, rowNumber, grid, setGrid}) => {
  return (
    <div className="line">
      {[...Array(width)].map((cell, i) => 
        <Cell key={rowNumber*10 + i} rowNumber={rowNumber} colNumber={i} grid={grid} setGrid={setGrid}/>
      )}
    </div>
  )
}

export default Line