import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Quotes from './pages/Quotes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Books />} />
          <Route path="books/:id" element={<BookDetails />} />
          <Route path="quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

