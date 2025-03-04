import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const allUsers = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["Users"],
    }),
    deleteUser: builder.mutation<any, string>({
      query: (userID) => ({
        url: `/users/${userID}`,
        method: "DELETE",
      }),
      async onQueryStarted(userID, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          allUsers.util.updateQueryData("getAllUsers", undefined, (draft) => {
            return draft.filter((user: any) => user.id !== userID);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

// Export Hooks
export const { useGetAllUsersQuery, useDeleteUserMutation } = allUsers;
