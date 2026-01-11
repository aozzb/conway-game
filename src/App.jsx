import './App.css'
import createGrid from "./utils/createGrid";
import { useState } from "react";


const ROWS=30;
const COLS=50;

function App() {

  const [grid, setGrid] = useState(() => createGrid(ROWS, COLS));
  
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </>
  )
}

export default App
