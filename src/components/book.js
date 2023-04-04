import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (

    <div className="book-list">
      <h1>
        <span className="title">Book Title</span>
        <span className="author">Book Author</span>
      </h1>
      {
        books.map((book) => (
          <div key={book.id}>
            <h2 className="diplaying">
              <span className="title">{book.title}</span>
              <span className="author">{book.author}</span>
            </h2>
            <button type="submit" className="remove-btn" id={book.id} onClick={handleRemove}>Remove</button>
          </div>
        ))
      }
    </div>
  );
};
export default Book;
