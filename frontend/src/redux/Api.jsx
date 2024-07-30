
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),

  endpoints: (builder) => ({

    getbanner: builder.query({
      query: () => 'banner',
    }),
    createbanner: builder.mutation({
      query: (newItem) => ({
        url: 'banner',
        method: 'POST',
        body: newItem,
      }),
    }),
    updatebanner: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `banner/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deletebanner: builder.mutation({
      query: (id) => ({
        url: `banner/${id}`,
        method: 'DELETE',
      }),
    }),
    // getContacts: builder.query({
    //   query: () => 'contacts',
    // }),
    // createContact: builder.mutation({
    //   query: (newContact) => ({
    //     url: 'contacts',
    //     method: 'POST',
    //     body: newContact,
    //   }),
    // }),
    // updateContact: builder.mutation({
    //   query: ({ id, ...rest }) => ({
    //     url: `contacts/${id}`,
    //     method: 'PUT',
    //     body: rest,
    //   }),
    // }),
    // deleteContact: builder.mutation({
    //   query: (id) => ({
    //     url: `contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const {
  useGetBannerQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  // useGetContactsQuery,
  // useCreateContactMutation,
  // useUpdateContactMutation,
  // useDeleteContactMutation,
} = api;
