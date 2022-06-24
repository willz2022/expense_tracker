import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const transactionsSlice = createApi({
    reducerPath: 'api',
    //baseQuery: fetchBaseQuery ({ baseUrl:'http://localhost:3500/'}),
    baseQuery: fetchBaseQuery ({ baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Transactions'],
    endpoints: (builder)=>({})
})