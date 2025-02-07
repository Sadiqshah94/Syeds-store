import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {registerUser} from './services/auth/signup';
import {loginuser} from './services/auth/signin';
import { userProfile } from './services/dashboard/profile';

export const BASE_URL = import.meta.env.VITE_API_URL;


export const store = configureStore({
  reducer: {
    [registerUser.reducerPath]: registerUser.reducer,
    [loginuser.reducerPath]: loginuser.reducer, 
    [userProfile.reducerPath]: userProfile.reducer, 

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(registerUser.middleware)
      .concat(loginuser.middleware)
      .concat(userProfile.middleware)
      , 
});

setupListeners(store.dispatch);
