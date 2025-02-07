import { createApi, fetchBaseQuery,BASE_URL } from "@/store/index";
import {SignupProps} from './index';

export const registerUser = createApi({
  reducerPath: "register",
  baseQuery: fetchBaseQuery({  baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    createUser: builder.mutation<SignupProps, any>({
      query: (userData) => ({
        url: "users",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = registerUser;
