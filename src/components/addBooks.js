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
      <form className="add-form" onSubmit={addNewBook}>
        <input className="input title-input" type="text" placeholder="Book title" onChange={changeTitle} value={title} />
        <input className="input title-input" type="text" placeholder="Add author" onChange={changeAuthor} value={author} />
        <select className="input category-input" onChange={changeCategory} value={category}>
          <option value="Fiction">Fiction</option>
          <option value="Computer-Science">Computer Science</option>
          <option value="Health">Health</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biography">Biography</option>
          <option value="Comics">Comics</option>
        </select>
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
