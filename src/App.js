import React, { useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      setBooks(response.data.docs.slice(0, 10));  // Limit to 10 results for display
      setError(null);
    } catch (error) {
      setError("Could not fetch books. Please try again.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) searchBooks();
  };

  return (
    <div className="app p-8 max-w-lg mx-auto bg-gray-50 shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Book Finder</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a book title"
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded ml-2 transition duration-200"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
