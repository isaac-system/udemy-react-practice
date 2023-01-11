import React, { useState } from "react";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  /*
  기존의 명령형 접근 방식
  const para = document.createElement("p");
  para.textContent = "This is also visible";
  document.getElementsByTagName("root").append(para);
  */

  const DUMMY_EXPENES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENES);

  const addExpenseHandler = (newExpenseData) => {
    // console.log("In App.js");
    // console.log(el);
    // Create
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    // console.log(expense);
  };

  const updateExpenseHandler = (newExpenseData) => {
    //console.log("In App.js");
    //console.log(newExpenseData);
    // Update
    setExpenses(
      expenses.map((item) =>
        item.id === newExpenseData.id
          ? { ...item, title: newExpenseData.title }
          : item
      )
    );
    // console.log(expense);
  };

  return (
    // JSX라는 특수한 문법 때문에 기동 가능하다.
    // JSX == javascript + XML , html == XML
    // JSX 문법으로 작성하면 브라우저로 갈 때 브라우저 친화적 코드로 변환됨
    // !!! 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐이다.
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expense items={expenses} onChagneExpenseData={updateExpenseHandler} />
    </div>
  );
};

export default App;
