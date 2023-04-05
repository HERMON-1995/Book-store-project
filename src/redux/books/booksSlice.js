import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKSTORE_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ymqt9bZZ3hwpTLEEtE1N/books';

// Actions
export const loadBooks = createAsyncThunk('bookstore/books/LOAD', async () => {
  const response = await axios.get(BOOKSTORE_API_URL);
  return response.data;
});

export const createBook = createAsyncThunk('bookstore/books/CREATE', async ({ author, title, category }) => {
  const book = {
    item_id: uuidv4(), author, title, category,
  };
  await axios.post(BOOKSTORE_API_URL, book);
  const response = await axios.get(BOOKSTORE_API_URL);
  return response.data;
});

export const removeBook = createAsyncThunk('bookstore/books/REMOVE', async (bookId) => {
  await axios.delete(`${BOOKSTORE_API_URL}/${bookId}`);
  const response = await axios.get(BOOKSTORE_API_URL);
  return response.data;
});

// Reducer
export default function booksReducer(state = {}, action) {
  switch (action.type) {
    case loadBooks.fulfilled.type:
    case createBook.fulfilled.type:
    case removeBook.fulfilled.type:
      return action.payload;
    default:
      return state;
  }
}
