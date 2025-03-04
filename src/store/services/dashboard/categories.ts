import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const allCategories = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getAllCategories: builder.query<any, void>({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["Categories"],
    }),
    addCategory: builder.mutation<any, { values: any }>({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
      async onQueryStarted(category, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          allCategories.util.updateQueryData(
            "getAllCategories",
            undefined,
            (draft) => {
              draft.push(category);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation<any, { values: any }>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: "DELETE",
      }),
      async onQueryStarted(categoryId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          allCategories.util.updateQueryData(
            "getAllCategories",
            undefined,
            (draft) => {
              return draft.filter(
                (category: any) => category.id !== categoryId
              );
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = allCategories;
