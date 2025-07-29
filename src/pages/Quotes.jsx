import React, { useEffect, useState } from 'react';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((res) => res.json())
      .then((data) => {
        console.log('Quotes data:', data);
        setQuotes(data);
      });
  }, []);

  return (
    <div className="quotes-container">
      <h2>Famous Quotes</h2>
      <ul className="quotes-list">
        {quotes.map((q, index) => (
          <li key={index} className="quote-item">
            {q.text || q.quote || 'No quote found.'}
          </li>
        ))}
      </ul>
    </div>
  );
}
