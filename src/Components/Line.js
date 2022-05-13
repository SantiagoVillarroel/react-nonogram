import React, { useState, useEffect, useCallback} from 'react';
import Cell from './Cell';

const Line = ({width, rowNumber, grid, gridChange}) => {

  let arrayInicial = lineToNumbers(rowNumber);

  const [array, setArray] = useState(arrayInicial); 

  function lineToNumbers(){
    let tempArray = [], tempCounter=0, cell;
    for(let j=0; j<width; j++){
      cell=grid[rowNumber][j];

      if(cell===1){
        tempCounter++;
        if(j===width-1 || grid[rowNumber][j+1]===0){
          tempArray.push(tempCounter);
          tempCounter=0;
        }
      }
    }
    return tempArray;
  }

  const handleChange = useCallback((i) => {
    setArray(lineToNumbers(rowNumber));
  }, []);

  return (
    <div className="line">
      {array.map((number, i) => 
        <div className="numbers-row">{number}</div>
      )}
      {[...Array(width)].map((cell, i) => 
        <Cell key={rowNumber*10 + i} rowNumber={rowNumber} colNumber={i} grid={grid} gridChange={gridChange} arrayChange={handleChange}/>
      )}
    </div>
  );
};

export default Line;