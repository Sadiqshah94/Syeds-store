import { createApi, fetchBaseQuery, BASE_URL } from "@/store/index";

export const allProducts = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => ({
        url: "/products",
      }),
    }),
    addProduct: builder.mutation<any, { values: any }>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

// Export the hook
export const { useGetAllProductsQuery,useAddProductMutation } = allProducts;
