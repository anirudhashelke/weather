import React from 'react';
import BookCard from '../BookCard';


function BookList({ books }) {
  if (!books.length) return <p className="text-center text-gray-500 mt-6">No books found. Try another search.</p>;

  return (
    <div className="book-list mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookList;
