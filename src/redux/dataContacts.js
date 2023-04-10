import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
   reducerPath: 'contacts',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://642ff654b289b1dec4be0f75.mockapi.io',
   }),
   tagTypes: ['Contact'],
   endpoints: builder => ({
      fetchContacts: builder.query({
         query: () => '/contacts',
         providesTags: ['Contact'],
      }),
      addContact: builder.mutation({
         query: values => ({
            url: '/contacts',
            method: 'POST',
            body: values,
         }),
         invalidatesTags: ['Contact'],
      }),
      deleteContact: builder.mutation({
         query: id => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Contact'],
      }),
   }),
});

export const {
   useFetchContactsQuery,
   useAddContactMutation,
   useDeleteContactMutation,
} = contactApi;
