import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../auth/initials";

// Define the API for user profile with token authentication
export const userProfile = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      console.log(`Access token: ${token}`);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<any, void>({
      query: () => ({
        url: "auth/profile",
      }),
    }),
  }),
});

// Export the hook
export const { useGetProfileQuery } = userProfile;
