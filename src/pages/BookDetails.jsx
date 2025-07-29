import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="details-panel">
      <img src={book.image || book.coverImage} alt={book.title} className="details-image" />
      <div className="details-content">
        <h2>{book.title}</h2>
        <p>{book.description || 'No description available.'}</p>
      </div>
    </div>
  );
}