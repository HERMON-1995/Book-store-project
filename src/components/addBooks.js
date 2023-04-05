import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');

  const changeTitle = (e) => setTitle(e.target.value);
  const changeAuthor = (e) => setAuthor(e.target.value);
  const changeCategory = (e) => setCategory(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(createBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div>
      <h2 className="add-title">ADD NEW BOOK</h2>
      <form onSubmit={addNewBook}>
        <input type="text" placeholder="Book title" onChange={changeTitle} value={title} />
        <input type="text" placeholder="Add author" onChange={changeAuthor} value={author} />
        <select onChange={changeCategory} value={category}>
          <option value="Computer-Science">Computer Science</option>
          <option value="Astrology">Health</option>
          <option value="Mathematics">Agriculture</option>
          <option value="Biology">Mechanical Engineering</option>
          <option value="Physics">Mathematics</option>
          <option value="Physics">Fiction</option>
          <option value="Biography">Biography</option>
          <option value="Biography">Comics</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
