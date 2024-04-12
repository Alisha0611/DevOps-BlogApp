import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogReducer';

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;