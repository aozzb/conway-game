import { useState, useRef, useEffect } from "react";
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

const createRandomGrid = (rows, cols) => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.random() > 0.7 ? 1 : 0);
    }
    grid.push(row);
  }

  return grid;
};


function App() {
  const [grid, setGrid] = useState(() => createGrid(ROWS, COLS));
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const startSimulation = () => {
  if (intervalRef.current) return;

  intervalRef.current = setInterval(() => {
    nextGeneration();
  }, 300);

  setIsRunning(true);
};

useEffect(() => {
  return () => {
    clearInterval(intervalRef.current);
  };
}, []);


const stopSimulation = () => {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
  setIsRunning(false);
};


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

  const resetGrid = () => {
  stopSimulation(); // safety
  setGrid(createGrid(ROWS, COLS));
};

const randomizeGrid = () => {
  stopSimulation(); // important
  setGrid(createRandomGrid(ROWS, COLS));
};



  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Conway’s Game of Life
      </h1>

      <div style={{ marginBottom: "10px" }}>
        {!isRunning ? (
          <button onClick={startSimulation}>Start</button>
        ) : (
          <button onClick={stopSimulation}>Stop</button>
        )}

        <button onClick={nextGeneration} style={{ marginLeft: "10px" }}>
          Next
        </button>

        <button onClick={resetGrid} style={{ marginLeft: "10px" }}>
          Reset
        </button>

        <button onClick={randomizeGrid} style={{ marginLeft: "10px" }}>
          Random
        </button>
      </div>
      <Grid grid={grid} toggleCell={toggleCell} />
    </div>
  );
}

export default App;
