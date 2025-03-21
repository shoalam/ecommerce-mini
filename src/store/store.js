import { productServices } from "@/services/ProductServices";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productServices.reducerPath]: productServices.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productServices.middleware),
});

setupListeners(store.dispatch);
