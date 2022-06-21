import { useSelector } from "react-redux";
import { selectAllTransactions } from "./transactionsSlice";
import {Routes, Route, Navigate} from 'react-router-dom'
import { useGetTransactionsQuery,useDeleteTransactionMutation } from "./transactionsSlice";
import { useState } from "react";
import Pagination from "../../components/Pagination";



const TransactionsList = () =>{
    const{
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTransactionsQuery()

    const [deleteTransaction] = useDeleteTransactionMutation()
    const transactions = useSelector(selectAllTransactions)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [transactionsPerPage, setTransactionsPerPage] = useState(5)

    const indexOfLastTransaction = currentPage*transactionsPerPage
    const indexOfFirstTransaction = indexOfLastTransaction-transactionsPerPage
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)


    const handleClick = async(id) =>{
        try{
            await deleteTransaction({id})
        }catch(err){
            console.error('failed to delete the transaction',err)
        }
    }


    let content
    if(isLoading){
        content =<p>Loading...</p>
    }else if(isSuccess){
        content=currentTransactions.map(transaction => 
            <li className="list-group-item list-group-item-action list-group-item-light" key = {transaction.id}>

                <div className="row">
                    <div className="col-5 px-3 d-flex align-items-center"><p className="m-0">{transaction.item}</p></div>
                    <div className="col-5 px-3 d-flex align-items-center justify-content-end "><p className="m-0">${transaction.amount}</p></div>
                    <button className="col-2 btn btn-outline-danger bi bi-trash3-fill" onClick={e=>handleClick(transaction.id)}></button>
                </div>
            </li>

        
        )
    }else if(isError){
        content = <p>{error}</p>
    }

    return(
        <div className=''> 
            <h5>History</h5>
            <ul className="list-group mb-3" >
                {content}
            </ul>
            <Pagination 
                transactionsPerPage = {transactionsPerPage}
                totalTransactions ={transactions.length}
                setCurrentPage={setCurrentPage}
            />
        </div>

        
    )
}

export default TransactionsList