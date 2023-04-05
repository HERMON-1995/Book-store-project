import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Add author"
          value={author}
          onChange={handleChange}
        />
        <select name="category" value={category} onChange={handleChange}>
          <option value="Computer-Science">Computer Science</option>
          <option value="Astrology">Health</option>
          <option value="Mathematics">Agriculture</option>
          <option value="Biology">Mechanical Engineering</option>
          <option value="Physics">Mathematics</option>
          <option value="Fiction">Fiction</option>
          <option value="Biography">Biography</option>
          <option value="Comics">Comics</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
