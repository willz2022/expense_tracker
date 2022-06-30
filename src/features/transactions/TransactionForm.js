import { useState, useEffect } from "react"
import { useAddNewTransactionMutation } from "./transactionsSlice"

const ExpenseForm = () =>{

    const [addNewTransaction,{isLoading}] = useAddNewTransactionMutation()

    const [item, setItem] = useState('')
    const [amount, setAmount] =useState('')
    const [type, setType] = useState('')


    const canSave = [item, amount].every(Boolean) &&!isLoading


    useEffect(()=>{
        if(Number(amount)>0){
            setType('income')
        }else if (Number(amount)<0){
            setType('expense')
        }
       // console.log(amount, type)
    },[amount])

    const onAddTransactionClicked = async() =>{
        
        if(canSave){
            try{
                await addNewTransaction({item,amount,type}).unwrap()
                setItem('')
                setAmount('')
                setType('')
            }catch(err){
                console.error('failed to submit transaction',err)
            }
        }
    }


    return(
        <section className="">
            <h4 className="mt-4">Add new transaction</h4>
            <form className="form">
                <div className="input-group">
                    <span className="input-group-text" htmlFor='transaction-item'>Item</span>
                    <input 
                        className="form-control" 
                        id = 'transaction-item' 
                        type = 'text' 
                        placeholder="Enter item..."
                        value = {item}
                        onChange = {e=>setItem(e.target.value)}
                    />
                </div>

                <div className="input-group mt-3">
                    <span className="input-group-text">$</span>
                    <label className="input-group-text" htmlFor="transaction-amount" data-bs-toggle='tooltip' data-bs-placement='bottom' title = "('-' is expense, '+' is income)">Amount</label>
                    <input 
                        className="form-control" 
                        id = 'transaction-amount' 
                        type = 'text' 
                        placeholder="Enter amount..."
                        value = {amount}
                        onChange = {e=>setAmount(e.target.value)}
                    />
                </div>
                <div className="d-grid justify-content-end">
                    <button type='button' className="btn btn-outline-primary mt-3" onClick={onAddTransactionClicked}>Add Transaction</button>
                </div>                
            </form>
        </section>
    )

}

export default ExpenseForm