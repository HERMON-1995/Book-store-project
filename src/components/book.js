import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book(props) {
  const {
    author, title, category, bookId,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="display">
      <h2 className="book-h1">Book Store CMS</h2>
      <div>
        <h3>
          Category:
          <em>
            **
            {category}
            **
          </em>
        </h3>
        <h3>
          Title:
          <em>
            **
            {title}
            **
          </em>
        </h3>
        <h3>
          Author:
          <em>
            **
            {author}
            **
          </em>
        </h3>
      </div>
      <div>
        <button type="button" className="remove-btn">
          Comments
        </button>
        <button type="button" className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
        <button type="button" className="remove-btn">
          Edit
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;
