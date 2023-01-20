import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesSearch from "./ExpensesSearch";

import "./Expense.css";

const Expense = (props) => {
  const [title, setTitle] = useState("");
  const filterChangeHandler = (selectedYear) => {
    props.onFilteredYear(selectedYear);
  };
  const searchTitleHandler = (title) => {
    setTitle(title);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === props.filteredYear &&
      expense.title.toLowerCase().includes(title.toLowerCase())
    );
  });
  const submitHandler = (updatedData) => {
    props.onChagneExpenseData(updatedData);
  };

  let expensesContent = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: "white" }}>No expenses found.</p>
    </div>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        onChagneExpenseData={submitHandler}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={props.filteredYear}
        onUpdateYear={filterChangeHandler}
      >
        <ExpensesSearch onSearchTitle={searchTitleHandler} />
      </ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses} />
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
