# 🧬 Conway’s Game of Life — React

A frontend-only implementation of **Conway’s Game of Life**, built with **React** to practice core concepts like **state modeling**, **immutability**, and **time-based updates**.

This project intentionally avoids overengineering (no backend, no external state libraries) and focuses on **clean logic, predictable React patterns, and clarity over flashiness**.

Hosted on netlify here: https://aozzgameoflife.netlify.app/
---

## 🚀 Features

- 🟦 Interactive grid (click cells to toggle alive/dead)
- ▶️ Manual step control (**Next Generation**)
- ⏱️ Auto-play simulation (**Start / Stop**)
- 🔄 Reset grid
- 🎲 Random grid seeding
- 🌙 Light / Dark (Night Mode) toggle
- 🎨 Clean, minimal UI
- ⚛️ Pure React + CSS (**no Tailwind, no UI libraries**)

---

## 🧠 What This Project Demonstrates

- **React fundamentals**
  - `useState`, `useEffect`, `useRef`
- **Immutable state updates**
- **Derived state computation**
- **Time-based logic using `setInterval`**
- **Safe interval handling with cleanup**
- **Separation of logic and presentation**
- **CSS-driven theming**

This project is designed to show **understanding**, not just output.

---

## 🧱 Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **CSS** (plain CSS, no frameworks)

---

## 📁 Project Structure

```txt
src/
  components/
    Grid.jsx        // Renders the grid UI
  utils/
    createGrid.js   // Grid factory (pure function)
  App.jsx           // State, logic, controls
  App.css           // App-specific styles & theming
```
--- 

## 🎮 How It Works

- The grid is represented as a **2D array**
  - `0` → dead cell
  - `1` → alive cell
- Each generation is computed from the **previous grid**
- Conway’s rules are applied **simultaneously** to all cells
- The simulation uses **immutable updates** to ensure correct React re-renders

---

## ▶️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd conways-game-of-life
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the app
```bash
npm run dev
```

### 4️⃣ Open your browser at:
```txt
http://localhost:5173
```
---

## 🧪 Controls

- **Start** → Begin auto-play simulation  
- **Stop** → Pause simulation  
- **Next** → Advance one generation  
- **Reset** → Clear the grid  
- **Random** → Seed a random pattern  
- **Dark Mode / Light Mode** → Toggle theme

---

## 📄 License

This project is open-source and available under the **MIT License**.
