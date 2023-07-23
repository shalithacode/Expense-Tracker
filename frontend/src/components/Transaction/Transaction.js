import React, { useContext } from "react";
import { expenseContaxt } from "../../context/expense-contaxt";

function Transaction(props) {
  const ctx = useContext(expenseContaxt);

  const handleDeleteTransaction = () => {
    ctx.deleteTransaction(props.transaction.id);
  };

  return (
    <li className={props.transaction.amount > 0 ? "plus" : "minus"}>
      {props.transaction.text}{" "}
      <span>
        {props.transaction.amount > 0 ? "+" : "-"}$
        {Math.abs(props.transaction.amount)}
      </span>
      <button className="delete-btn" onClick={handleDeleteTransaction}>
        x
      </button>
    </li>
  );
}

export default Transaction;
