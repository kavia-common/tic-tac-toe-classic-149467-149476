import React from 'react';
import './App.css';
import './styles.css';
import Board from './components/Board';

/**
 * PUBLIC_INTERFACE
 * App is the root component that renders the Tic Tac Toe game UI.
 * It applies the Ocean Professional theme styling and sets up the layout:
 * - Title header
 * - Turn/status area
 * - 3x3 Board
 * - Result display and Reset button
 */
function App() {
  return (
    <div className="ocean-app">
      <header className="ocean-header" role="banner" aria-label="Tic Tac Toe">
        <h1 className="ocean-title">Tic Tac Toe</h1>
        <p className="ocean-subtitle">Two players • One board • Pure fun</p>
      </header>
      <main className="ocean-main" role="main">
        <div className="card-surface">
          <Board />
        </div>
      </main>
      <footer className="ocean-footer" role="contentinfo">
        <span className="muted">Built with React • Ocean Professional theme</span>
      </footer>
    </div>
  );
}

export default App;
