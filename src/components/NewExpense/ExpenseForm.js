import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //방법 1 . 여러개의 useState를 사용하여 관리
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // 방법 2. 하나의 useState로 객체를 관리하는 것
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //document.getElementById("").addEventListener("cick", (event) => {});
  const titleChangeHandler = (event) => {
    // 방법 1 . 여러개의 useState를 사용하여 관리
    setEnteredTitle(event.target.value);
    // 방법 2-1. 하나의 useState로 객체를 관리하는 것
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // 방법 2-2. 하나의 useState로 객체를 관리하는 것
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // prevState 가 가장 최근 상태의 스냅샷 과 항상 계획된 상태 업데이트를 염두하는것을 보장한다.
    // !!! 꼭 기억할 것
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  // ajax 같은거?
  const submitHandler = (event) => {
    // form이 새로고침 되는 것을 막는다.
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //  양방향 바인딩이 뭐지?

    // 상향식 통신
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
