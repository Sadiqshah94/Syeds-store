import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "./initials";
import { SignupProps } from "@/modules/auth/hooks/interfaces/types";

export const registerUser = createApi({
  reducerPath: "register",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
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
