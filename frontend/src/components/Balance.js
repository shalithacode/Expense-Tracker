import React, { useContext } from "react";
import { expenseContaxt } from "../context/expense-contaxt";
function Balance() {
  const { transactions } = useContext(expenseContaxt);

  const total = transactions.reduce((currentVal, transaction) => {
    return currentVal + +transaction.amount;
  }, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
