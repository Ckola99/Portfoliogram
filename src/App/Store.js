import { configureStore } from '@reduxjs/toolkit';
import githubReducer from '../Features/github/githubSlice';

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
});

export default store;
