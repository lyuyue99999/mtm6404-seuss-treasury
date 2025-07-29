import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">Seuss Treasury</h1>
        <nav className="nav">
          <Link to="/">Books</Link>
          <Link to="/quotes">Quotes</Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}