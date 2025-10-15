import React, { useMemo, useState } from 'react';
import Square from './Square';

/**
 * Calculate winner of a Tic Tac Toe board
 * Returns { winner: 'X'|'O'|null, line: [a,b,c] | null }
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], // diags
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

/**
 * PUBLIC_INTERFACE
 * Board renders the 3x3 grid, manages game state, and displays status/result.
 * - Alternates turns between X and O
 * - Prevents playing into a filled cell or after game end
 * - Detects winner and draw
 * - Highlights winning line
 * - Provides Reset functionality
 */
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = useMemo(() => calculateWinner(squares), [squares]);
  const isBoardFull = useMemo(() => squares.every((s) => s !== null), [squares]);
  const isDraw = !winner && isBoardFull;

  function handlePlay(index) {
    // Disallow play if filled or game finished
    if (squares[index] || winner) return;
    setSquares((prev) => {
      const next = prev.slice();
      next[index] = xIsNext ? 'X' : 'O';
      return next;
    });
    setXIsNext((prev) => !prev);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true); // X always starts
  }

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw! No more moves.'
    : `Turn: ${xIsNext ? 'X' : 'O'}`;

  return (
    <section aria-label="Tic Tac Toe game board">
      <div className="status-row">
        <div
          className={`pill ${winner ? 'pill-success' : isDraw ? 'pill-secondary' : 'pill-primary'}`}
          role="status"
          aria-live="polite"
        >
          {statusText}
        </div>

        <button
          className="btn-reset"
          type="button"
          onClick={handleReset}
          aria-label="Reset game and start new match"
        >
          Reset
        </button>
      </div>

      <div
        className="grid"
        role="grid"
        aria-label="3 by 3 Tic Tac Toe grid"
        aria-describedby="game-instructions"
      >
        {squares.map((value, idx) => {
          const isWinning = line ? line.includes(idx) : false;
          return (
            <Square
              key={idx}
              index={idx}
              value={value}
              onPlay={() => handlePlay(idx)}
              disabled={Boolean(value) || Boolean(winner)}
              highlight={isWinning}
              nextPlayer={xIsNext ? 'X' : 'O'}
            />
          );
        })}
      </div>

      <p id="game-instructions" className="muted small">
        Use mouse or keyboard. Navigate with Tab; press Enter or Space to play your move.
      </p>
    </section>
  );
}
