import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const changeTitleHandler = (updatedTitle) => {
    props.onChagneExpenseData(updatedTitle);
  };

  {
    /* 방법 3 */
  }
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length > 0) {
    expensesContent = filteredExpenses.map((item, index) => (
      <ExpenseItem
        key={index}
        title={item.title}
        amount={item.amount}
        date={item.date}
        onChagneExpenseData={changeTitleHandler}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onUpdateYear={filterChangeHandler}
      />

      {/* 방법 1 : && 연산자를 이용하기*/}
      {/*
      {filteredExpenses.length === 0 && expensesContent}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            onChagneExpenseData={changeTitleHandler}
          />
        ))}
       */}

      {/* 방법 2 : 삼항 연산자를 이용하기*/}
      {/*       
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            onChagneExpenseData={changeTitleHandler}
          />
        ))
      )}
       */}

      {/* 방법 3 : 컴포넌트 내부에서 변수로 정의하고 그대로 내려받기*/}
      {expensesContent}
    </Card>
  );
};

export default Expense;
