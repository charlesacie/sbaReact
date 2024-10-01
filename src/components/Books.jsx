import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=favorite+books')
      .then(response => response.json())
      .then(data => setBooks(data.items))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="section">
      <h2>Favorite Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
