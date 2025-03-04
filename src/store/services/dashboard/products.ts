import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const allProducts = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation<any, { values: any }>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      async onQueryStarted(product, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          allProducts.util.updateQueryData(
            "getAllProducts",
            undefined,
            (draft) => {
              draft.push(product);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation<any, { values: any }>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      async onQueryStarted(productId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          allProducts.util.updateQueryData(
            "getAllProducts",
            undefined,
            (draft) => {
              return draft.filter((product: any) => product.id !== productId);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useAddProductMutation,
} = allProducts;
