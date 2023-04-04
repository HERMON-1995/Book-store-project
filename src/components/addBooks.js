/* disable-eslint /no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleTitle = (e) => {
    if (e.target.value !== '') {
      setNewBook({
        ...newBook, title: e.target.value,
      });
    }
  };
  const handleAuthor = (e) => {
    if (e.target.value !== '') {
      setNewBook({
        ...newBook, author: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(newBook.title.trim() && newBook.author.trim())) {
      return;
    }

    const book = {
      id: uuid(),
      title: newBook.title,
      author: newBook.author,
    };
    dispatch(addBook(book));
    setNewBook({
      title: '',
      author: '',
    });
  };
  return (
    <div>
      <form>

        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newBook.title}
          onChange={handleTitle}
          required
        />

        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleAuthor}
          required
        />

        <button
          type="submit"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
