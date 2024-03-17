// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: reducer,
  // Outras opções como middleware, devtools, etc.
});

export default store;
