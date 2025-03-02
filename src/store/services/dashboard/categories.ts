import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const allCategories = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<any, void>({
      query: () => ({
        url: "/categories",
      }),
    }),
    addCategory: builder.mutation<any, { values:any }>({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
    }),
  }),
  
});

export const { useGetAllCategoriesQuery,useAddCategoryMutation } = allCategories;
