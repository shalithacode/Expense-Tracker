import React from "react";

const initialState = {
  transactions: [],
  deleteTransaction: (id) => {},
  addTransaction: (transaction) => {},
};

export const expenseContaxt = React.createContext(initialState);
