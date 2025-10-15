import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square is an interactive cell button for the board.
 * Props:
 * - index: number (0..8)
 * - value: 'X' | 'O' | null
 * - onPlay: () => void
 * - disabled: boolean
 * - highlight: boolean - if true, apply winning highlight
 * - nextPlayer: 'X' | 'O' - used for accessible label when empty
 */
export default function Square({
  index,
  value,
  onPlay,
  disabled,
  highlight,
  nextPlayer,
}) {
  const label = value
    ? `Cell ${index + 1}, ${value}`
    : `Cell ${index + 1}, empty. Play ${nextPlayer}`;

  function handleKeyDown(e) {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onPlay();
    }
  }

  return (
    <button
      type="button"
      className={`square ${highlight ? 'square-highlight' : ''} ${
        value === 'X' ? 'square-x' : value === 'O' ? 'square-o' : ''
      }`}
      onClick={onPlay}
      onKeyDown={handleKeyDown}
      aria-label={label}
      aria-disabled={disabled ? 'true' : 'false'}
      disabled={disabled}
      role="gridcell"
      tabIndex={0}
    >
      <span className="mark" aria-hidden="true">
        {value}
      </span>
    </button>
  );
}
