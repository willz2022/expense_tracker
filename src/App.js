

//import Layout from "./components/Layout"; //figure it out later...
import Hero from "./components/Hero";
import TransactionsList from "./features/transactions/TransactionsList";
import TransactionForm from "./features/transactions/TransactionForm";


function App() {

  
  return (

    <main className="container w-50 mt-5">
      <Hero />
      <TransactionsList />
      <TransactionForm />

    </main>

  )
}

export default App;
