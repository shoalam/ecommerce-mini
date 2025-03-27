// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productServices = createApi({
  reducerPath: "productServices",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${process.env.NEXT_PUBLIC_JSON_PORT}`,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productServices;
