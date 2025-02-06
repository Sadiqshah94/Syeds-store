import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../auth/initials";

// Define the API for user profile
export const userProfile = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getProfile: builder.query<any, void>({
      query: () => ({
        url: "auth/profile",
      }),
    }),
  }),
});

export const { useGetProfileQuery } = userProfile;
