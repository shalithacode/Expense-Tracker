import React, { useReducer } from "react";
import { expenseContaxt } from "./expense-contaxt";

const initialState = {
  transactions: [],
  deleteTransaction: (id) => {},
  addTransaction: (transaction) => {},
};
const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

function ExpenseProvider(props) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  //Action
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD", payload: transaction });
  };
  return (
    <expenseContaxt.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </expenseContaxt.Provider>
  );
}

export default ExpenseProvider;
