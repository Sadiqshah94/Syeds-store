import { useDispatch } from "react-redux";
import authReducer from "@/store/features/auth/authSlice";

import {
  combineReducers,
  configureStore,
  persistReducer,
  persistStore,
  registerUser,
  setupListeners,
  // signInReducer,
  storage,
  userProfile,
} from "./index";
import { loginuser } from "./services/auth/signin";
import { allUsers } from "./services/dashboard/user";
import { allProducts } from "./services/dashboard/products";
import { allCategories } from "./services/dashboard/categories";

export const BASE_URL = import.meta.env.VITE_API_URL;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth:authReducer,
  [loginuser.reducerPath]: registerUser.reducer,
  [registerUser.reducerPath]: registerUser.reducer,
  [userProfile.reducerPath]: userProfile.reducer,
  [allUsers.reducerPath]: allUsers.reducer,
  [allProducts.reducerPath]: allProducts.reducer,
  [allCategories.reducerPath]: allCategories.reducer,



});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(registerUser.middleware)
      .concat(userProfile.middleware)
      .concat(allUsers.middleware)
      .concat(allProducts.middleware)
      .concat(allCategories.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

setupListeners(store.dispatch);
