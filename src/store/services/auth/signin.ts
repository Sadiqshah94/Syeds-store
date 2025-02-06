import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "./initials";
import { SigninProps } from "@/modules/auth/hooks/interfaces/types";

export const loginuser = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation<SigninProps, any>({
      query: (userData) => ({
        url: "auth/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginuser;
