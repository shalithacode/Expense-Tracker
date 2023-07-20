import React, { useReducer } from "react";
import { expenseContaxt } from "./expense-contaxt";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
const expenseReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function ExpenseProvider(props) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  return (
    <expenseContaxt.Provider value={{ transactions: state.transactions }}>
      {props.children}
    </expenseContaxt.Provider>
  );
}

export default ExpenseProvider;
