import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; 
import Action from './Action';

const store = configureStore({
  reducer: {
    Todo: Action,
  },
  middleware: [thunk], 
});

export default store;
