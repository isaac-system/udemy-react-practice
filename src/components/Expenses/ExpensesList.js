import React from "react";

import ExpenseItem from "./ExpenseItem";
const ExpensesList = () => {
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        onChagneExpenseData={changeTitleHandler}
      />
    ));
  }
  return <div>ExpensesList</div>;
};

export default ExpensesList;
