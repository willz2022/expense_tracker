import { selectAllTransactions } from "../features/transactions/transactionsSlice"
import { useSelector } from "react-redux"



const Hero = () =>{

    const transactions = useSelector(selectAllTransactions)

    const incomeTransactions = transactions.filter(transaction=>transaction.type==='income')
    const income = incomeTransactions.reduce((prev,current)=>prev+current.amount, 0)

    const expenseTransactions = transactions.filter(transaction=>transaction.type==='expense')
    const expense = expenseTransactions.reduce((prev,current)=>prev+current.amount, 0)

    const currentBalance = income-expense


    return(
        <header className="mb-3">
            <h3 className="text-center mb-5">Expense Tracker</h3>
            <h5 id = 'current-balance'>YOUR BALANCE</h5>
            <h3 className="text-info">${currentBalance}</h3>
            <div className="row bg-light text-center" >
                <div className="col p-4">
                    <label>INCOME</label>
                    <h4 className="text-success" >${income}</h4>
                </div>
                <div className="col p-4">
                    <label>EXPENSE</label>
                    <h4 className="text-danger">${expense}</h4>
                </div>
            </div>
        </header>
    )

}

export default Hero