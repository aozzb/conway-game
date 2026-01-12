import { useState } from "react";
import createGrid from "./utils/createGrid";
import Grid from "./components/Grid";
import "./App.css";

const ROWS = 30;
const COLS = 50;

const countAliveNeighbors = (grid, row, col) => {
  let count = 0;

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1],
  ];

  for (let [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;

    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length
    ) {
      count += grid[newRow][newCol];
    }
  }

  return count;
};


function App() {
  const [grid, setGrid] = useState(() => createGrid(ROWS, COLS));

  const nextGeneration = () => {
  setGrid(prevGrid =>
    prevGrid.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        const aliveNeighbors = countAliveNeighbors(prevGrid, rIdx, cIdx);

        if (cell === 1) {
          return aliveNeighbors === 2 || aliveNeighbors === 3 ? 1 : 0;
        } else {
          return aliveNeighbors === 3 ? 1 : 0;
        }
      })
    )
  );
};


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

      <button onClick={nextGeneration} style={{ marginBottom: "10px" }}>
        Next Generation
      </button>

      <Grid grid={grid} toggleCell={toggleCell} />

    </div>
  );
}

export default App;
