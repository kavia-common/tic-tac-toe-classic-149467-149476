# Tic Tac Toe Frontend (Ocean Professional)

A modern, lightweight React implementation of a two–player Tic Tac Toe game with accessible controls and polished UI.

## Features
- 3x3 grid with turn-based play (X starts)
- Winner detection and winning-line highlight
- Draw detection (when board is full and no winner)
- Reset button resets board and sets starting player to X
- Accessible squares (buttons) with ARIA labels and keyboard play (Enter/Space)
- Ocean Professional theme with subtle shadows, rounded corners, and gradients

## Run locally
- `npm start` (port 3000 on CRA)
- Open http://localhost:3000

## Structure
- `src/App.js` – App shell and layout
- `src/components/Board.jsx` – Game state, rules, status, and grid
- `src/components/Square.jsx` – Accessible cell button
- `src/styles.css` – Theme and modern UI styling
- `src/index.js` – CRA bootstrap (unchanged)

## Notes
- No external services or environment variables required.
- Functional components with hooks.
- Styling follows provided Ocean Professional palette:
  - primary: #3b82f6
  - secondary: #64748b
  - success: #06b6d4
  - error: #EF4444
  - background: #f9fafb
  - surface: #ffffff
  - text: #111827
