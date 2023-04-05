import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ymqt9bZZ3hwpTLEEtE1N/books';

// Actions
export const loadBooks = createAsyncThunk('bookstore/books/LOAD', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const createBook = createAsyncThunk('bookstore/books/CREATE', async (book) => {
  await axios.post(URL, {
    item_id: uuidv4(),
    author: book.author,
    title: book.title,
    category: book.category,
  });
  const response = await axios.get(URL);
  return response.data;
});

export const removeBook = createAsyncThunk('bookstore/books/REMOVE', async (bookId) => {
  await axios.delete(`${URL}/${bookId}`);
  const response = await axios.get(URL);
  return response.data;
});

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case loadBooks.fulfilled.type:
    case createBook.fulfilled.type:
    case removeBook.fulfilled.type:
      return action.payload;
    default:
      return state;
  }
}
