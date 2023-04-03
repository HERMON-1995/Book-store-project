import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import BooksPage from './pages/booksPage';
import Categories from './pages/categories';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
