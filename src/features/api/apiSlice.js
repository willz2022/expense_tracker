import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const transactionsSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery ({ baseUrl:'http://localhost:3500/'}),
    tagTypes: ['Transactions'],
    endpoints: (builder)=>({})
})