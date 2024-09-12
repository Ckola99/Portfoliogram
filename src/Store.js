import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './Features/github/githubSliceubSlice';

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
});

export default store;
