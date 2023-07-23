import React from "react";

function Transaction(props) {
  return (
    <li className={props.transaction.amount > 0 ? "plus" : "minus"}>
      {props.transaction.text}{" "}
      <span>
        {props.transaction.amount > 0 ? "+" : "-"}$
        {Math.abs(props.transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;
