import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/Transaction/TransactionList";
import AddTransaction from "./components/AddTransaction";
import ExpenseProvider from "./context/ExpenseProvider";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ExpenseProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </ExpenseProvider>
      </div>
    </>
  );
}

export default App;
