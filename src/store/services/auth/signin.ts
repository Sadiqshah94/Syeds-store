import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";
import { SigninProps } from "./index";

export const loginuser = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
