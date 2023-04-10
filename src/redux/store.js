import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./dataContacts";


export const store = configureStore({
   reducer: {
      [contactApi.reducerPath]: contactApi.reducer,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactApi.middleware,
   ],
})
