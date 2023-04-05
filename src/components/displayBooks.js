import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books/booksSlice';
import Book from './book';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <>
      <div>
        {Object.keys(books).length > 0 && Object.keys(books).map((id) => (
          <div key={id}>
            <Book
              author={books[id] && books[id][0] && books[id][0].author}
              title={books[id][0].title}
              category={books[id][0].category}
              bookId={id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayBooks;
