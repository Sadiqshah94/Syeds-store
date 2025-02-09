import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/constants/AppImages";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { persistReducer, persistStore } from "redux-persist";
import { registerUser } from "./services/auth/signup";
import { userProfile } from "./services/dashboard/profile";
import signInReducer from "./features/auth/signInReducer";

export {
  createApi,
  fetchBaseQuery,
  BASE_URL,
  configureStore,
  combineReducers,
  setupListeners,
  storage,
  persistReducer,
  persistStore,
  registerUser,
  userProfile,
  signInReducer,
};
