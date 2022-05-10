import React from 'react'
import Line from './Line'

const Grid = () => {
  const rows = 4, cols = 4

  /*function renderCells() {
    let i, j
    for(i=0; i<4; i++){
      let row = []
      for(j=0; j<4; j++){
        row.push(<Cell/>)
      }
      rows.push(row)
    }
  }*/

  return (
    <div className="grid">
      {[...Array(rows)].map((row, i) => 
        <Line width={cols} />
      )}
    </div>
  )
}

export default Grid