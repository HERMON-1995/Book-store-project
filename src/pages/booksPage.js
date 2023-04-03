import React from 'react';
import AddBook from '../components/addBooks';
import DisplayBooks from '../components/displayBooks';

function BooksPage() {
  return (
    <div className="book-page">
      <DisplayBooks />
      <AddBook />
    </div>
  );
}

export default BooksPage;
