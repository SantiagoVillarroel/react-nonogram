import React, {useState, useEffect} from 'react';
import Line from './Line';

const Grid = () => {
  const rows = 4, cols = 4;
  let gridArray = new Array(rows);
  for (let i = 0; i < rows; i++) {
    gridArray[i] = new Array(cols).fill(0);
  }

  const [grid, setGrid] = useState(gridArray);

  return (
    <div className="grid">
      {[...Array(rows)].map((row, i) => (
        <>
          <Line width={cols} key={i} rowNumber={i} grid={grid} setGrid={setGrid} />   
        </>)  
      )}
    </div>
  );
};

export default Grid;