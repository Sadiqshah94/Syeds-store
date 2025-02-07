import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const userProfile = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
