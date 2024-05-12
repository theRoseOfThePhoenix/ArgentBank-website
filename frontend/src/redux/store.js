import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./reducers/logReducer";
import userReducer from "./reducers/userReducer";

// Création d'un objet contenant les deux réducteurs //
const reducer = {
  auth: logReducer,
  profile: userReducer,
};

// Configure le store avec les deux reducers //
const store = configureStore({
  reducer: reducer,
});

export default store;
