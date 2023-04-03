const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const INITIAL_STATE = 0;
const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};
export const addBook = (book) => (
  { type: ADD, book }
);

export const removeBook = (bookId) => (
  { type: REMOVE, bookId }
);

export default bookReducer;
