import React, { useContext } from "react";
import { expenseContaxt } from "../context/expense-contaxt";
function IncomeExpenses() {
  const { transactions } = useContext(expenseContaxt);

  const income = transactions.reduce((currentVal, transaction) => {
    if (+transaction.amount >= 0) return currentVal + transaction.amount;
    else return currentVal;
  }, 0);
  const outcome = transactions.reduce((currentVal, transaction) => {
    if (+transaction.amount < 0) return currentVal + transaction.amount;
    else return currentVal;
  }, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(outcome.toFixed(2))}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
