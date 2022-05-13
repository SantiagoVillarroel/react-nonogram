import React, {useState, useEffect, useCallback} from 'react';
import Line from './Line';

const Grid = () => {
  const rows = 4, cols = 4;
  let gridArray = new Array(rows);
  for (let i = 0; i < rows; i++) {
    gridArray[i] = new Array(cols).fill(0);
  }

  const [grid, setGrid] = useState(gridArray);

  const handleChange = useCallback((newGrid) => {
    setGrid(newGrid);
    console.log(newGrid);
  }, []);

  return (
    <>
    <div>test</div>
    <div className="grid">
      {[...Array(rows)].map((row, i) => (
        <>
          <Line width={cols} key={i} rowNumber={i} grid={grid} gridChange={handleChange}/> 
        </> 
        )  
      )}
    </div>
    <div>test</div>
    </>
  );
};

export default Grid;