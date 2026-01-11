import { useState } from "react";
import createGrid from "./utils/createGrid";
import Grid from "./components/Grid";
import "./App.css";

const ROWS = 30;
const COLS = 50;

function App() {
  const [grid, setGrid] = useState(() => createGrid(ROWS, COLS));

  const toggleCell = (row, col) => {
    setGrid(prevGrid =>
      prevGrid.map((r, rIdx) =>
        rIdx === row
          ? r.map((cell, cIdx) =>
              cIdx === col ? (cell ? 0 : 1) : cell
            )
          : r
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Conway’s Game of Life
      </h1>

      <Grid grid={grid} toggleCell={toggleCell} />
    </div>
  );
}

export default App;
