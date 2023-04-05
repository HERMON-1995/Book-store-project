import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ymqt9bZZ3hwpTLEEtE1N/books';

// Actions
export const loadBooks = createAsyncThunk('bookstore/books/LOAD', async () => {
  const res = await fetch(URL);
  const json = await res.json();
  return json;
});

export const createBook = createAsyncThunk('bookstore/books/CREATE', async (book) => {
  await fetch(URL, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: uuidv4(),
      author: book.author,
      title: book.title,
      category: book.category,
    }),
  });
  const res = await fetch(URL);
  const json = await res.json();
  return json;
});

export const removeBook = createAsyncThunk('bookstore/books/REMOVE', async (bookId) => {
  await fetch(`${URL}/${bookId}`, {
    method: 'DELETE',
  });
  const res = await fetch(URL);
  const json = await res.json();
  return json;
});

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case loadBooks.fulfilled.type:
    case createBook.fulfilled.type:
    case removeBook.fulfilled.type:
      return action.payload;
    default: return state;
  }
}
