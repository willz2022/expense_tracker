import {createSelector, createEntityAdapter} from '@reduxjs/toolkit'
import { transactionsSlice } from '../api/apiSlice'

const transactionsAdapter = createEntityAdapter({
   sortComparer:(a,b)=>a.item.localeCompare(b.item),
})

const initialState = transactionsAdapter.getInitialState()


export const extendedTransactionsSlice = transactionsSlice.injectEndpoints({
    endpoints:(build)=>({
        getTransactions: build.query({
            query:()=>'/transactions',
            transformResponse: responseData =>{
                //console.log(responseData)
                return transactionsAdapter.setAll(initialState, responseData)
            },
            providesTags:(result, error, arg)=>[
                {type:'Transactions', id:'LIST'},
                ...result.ids.map(id=>({type:'Transactions',id}))
            ]
        }),
        addNewTransaction: build.mutation({
            query:initialTransaction=>({
                url:'/transactions',
                method: 'POST',
                body:{...initialTransaction, amount: Math.abs(Number(initialTransaction.amount))}
            }),
            invalidatesTags:[
                {type:'Transactions',id:'LIST'}
            ]
        }),
        deleteTransaction: build.mutation({
            query:({id})=>({
                url:`/transactions/${id}`,
                method: 'DELETE',
                body:{id}
            }),
            invalidatesTags:(result, error, arg)=>[
                {type:'Transactions',id:arg.id}
            ]
        })
    })
})

export const {useGetTransactionsQuery, useAddNewTransactionMutation, useDeleteTransactionMutation} = extendedTransactionsSlice

export const selectTransactionsResult = extendedTransactionsSlice.endpoints.getTransactions.select()

const selectTransactionData = createSelector(
    selectTransactionsResult,
    transactionsResult=>{
        return transactionsResult.data
    }
)

export const {
    selectAll:selectAllTransactions,
    selectById: selectTransactionById,
    selectIds: selectTransactionIds

}=transactionsAdapter.getSelectors(state=>selectTransactionData(state)??initialState)