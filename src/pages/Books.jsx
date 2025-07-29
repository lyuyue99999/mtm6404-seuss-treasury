import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="books-container">
      <h2>Explore Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="book-card">
            <img src={book.image || book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}