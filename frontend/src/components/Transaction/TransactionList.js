import React, { useContext } from "react";
import { expenseContaxt } from "../../context/expense-contaxt";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions } = useContext(expenseContaxt);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
