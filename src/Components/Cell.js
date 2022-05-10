import React, {useState} from 'react'

const Cell = () => {
  const [color, setColor] = useState(0)

  function changeColor(){
    setColor((color+1) % 2)
  }

  return (
    <button className="cell" onClick = {() => changeColor()} style = {{backgroundColor: color===0 ? "white" : "black"}}/>
  )
}

export default Cell