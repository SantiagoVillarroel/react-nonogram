import React, { useState, useEffect, useCallback} from 'react';
import Cell from './Cell';

const Line = ({width, rowNumber, grid, setGrid}) => {

  const lineToNumbers = useCallback((i) => {
    let tempArray = [], tempCounter=0, cell;
    for(let j=0; j<width; j++){
      cell=grid[i][j];

      if(cell===1){
        tempCounter++;
        if(j===width-1 || grid[i][j+1]===0){
          tempArray.push(tempCounter);
          tempCounter=0;
        }
      }
    }
    return tempArray
  }, [grid, width])

  const [array, setArray] = useState(lineToNumbers(rowNumber)); 

  useEffect(() => setArray(lineToNumbers(rowNumber)), [grid, rowNumber, lineToNumbers]);

  return (
    <div className="line">
      {array.map((number, i) => 
        <div className="numbers-row">{number}</div>
      )}
      {[...Array(width)].map((cell, i) => 
        <Cell key={rowNumber*10 + i} rowNumber={rowNumber} colNumber={i} grid={grid} setGrid={setGrid}/>
      )}
    </div>
  );
};

export default Line;