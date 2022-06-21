import {configureStore} from '@reduxjs/toolkit'
import { transactionsSlice } from '../features/api/apiSlice'


export const store = configureStore({
    reducer:{
        [transactionsSlice.reducerPath]: transactionsSlice.reducer

    },
    middleware:(getDefaultMidleware) => 
        getDefaultMidleware().concat(transactionsSlice.middleware)
})

