// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productServices = createApi({
  reducerPath: "productServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/react-store-products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productServices;
