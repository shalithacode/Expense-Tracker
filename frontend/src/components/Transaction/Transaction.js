import React from "react";

function Transaction(props) {
  return (
    <li className="minus">
      {props.transaction.text} <span>-${props.transaction.amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;
