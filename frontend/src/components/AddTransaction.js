import React, { useState, useContext } from "react";
import { expenseContaxt } from "../context/expense-contaxt";
function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const ctx = useContext(expenseContaxt);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    ctx.addTransaction({
      id: Math.random(),
      text,
      amount: +amount,
    });
    setText("");
    setAmount(0);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
