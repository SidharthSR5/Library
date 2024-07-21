// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = { title, author };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Library App</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="Add Book" />
      </form>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book-item" key={index}>
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
