import React, { useReducer } from "react";
import { expenseContaxt } from "./expense-contaxt";

const initialState = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];
const expenseReducer = (state, action) => {};

function ExpenseProvider(props) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  return <expenseContaxt.Provider>{props.children}</expenseContaxt.Provider>;
}

export default ExpenseProvider;
