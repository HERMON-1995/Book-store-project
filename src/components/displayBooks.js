import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books/booksSlice';
import Book from './book';

const DisplayBooks = () => {
  const { books } = useSelector((state) => state); // Destructuring state object
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  const renderBooks = () => {
    if (Object.keys(books).length > 0) {
      return Object.keys(books).map((id) => {
        const [firstBook] = books[id];
        const { author, title, category } = firstBook;
        return (
          <div key={id}>
            <Book author={author} title={title} category={category} bookId={id} />
          </div>
        );
      });
    }
    return null;
  };

  return (
    <div>
      {renderBooks()}
    </div>
  );
};

export default DisplayBooks;
