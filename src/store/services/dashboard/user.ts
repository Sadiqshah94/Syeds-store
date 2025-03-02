import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const allUsers = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, void>({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

// Export the hook
export const { useGetAllUsersQuery } = allUsers;
