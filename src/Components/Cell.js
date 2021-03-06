import React, {useState, useEffect} from 'react';

const Cell = ({rowNumber, colNumber, grid, gridChange, arrayChange}) => {
  const [color, setColor] = useState(0);

  function changeColor(){
    const newColor = (color+1) % 2;
    setColor(newColor);

    let gridCopy = grid;
    gridCopy[rowNumber][colNumber] = newColor;
    gridChange(gridCopy);
    arrayChange();
  };

  return (
    <button className="cell" onClick = {() => changeColor()} style = {{backgroundColor: color===0 ? "white" : "black"}}/>
  );
};

export default Cell;