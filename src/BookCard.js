import React from 'react';

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/128x195?text=No+Cover';

  return (
    <div className="book-card bg-white shadow rounded p-4 flex flex-col items-center text-center">
      <img src={coverUrl} alt={`${book.title} cover`} className="w-32 h-48 mb-4" />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-700">by {book.author_name?.[0] || 'Unknown Author'}</p>
      <p className="text-sm text-gray-500 mt-2">Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
