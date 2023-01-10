import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expense = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const changeYearHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const changeTitleHandler = (updatedTitle) => {
    props.onChagneExpenseData(updatedTitle);
  };

  console.log(props);
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearFilter}
        onUpdateYear={changeYearHandler}
      />

      {props.items
        .filter(
          (item) => yearFilter === new Date(item.date).getFullYear().toString()
        )
        .map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            onChagneExpenseData={changeTitleHandler}
          />
        ))}
    </Card>
  );
};

export default Expense;
