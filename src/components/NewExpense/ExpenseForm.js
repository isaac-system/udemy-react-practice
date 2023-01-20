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

  //document.getElementById("").addEventListener("click", (event) => {});
  //vanila js 에서는 위와 같은 식으로 event 객체를 가져온다. (명령형)
  // 아래는 react에서 event 객체를 가져오는 방식 (선언형)

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
  /*
    react 는 기본적으로 부모 컴포넌트에 데이터를 자식 컴포넌트로 전달하는 하향식(단방향) 바인딩이다.
    자식 컴포넌트로 부모 컴포넌트의 state를 변화를 주기 위하여 양방향 바인딩을 한다.

    양방향 바인딩이란?
    부모 컴포넌트와 자식 컴포넌트들과 데이터를 직접 변경할 수 있는 것을 의미한다.

    onChange 속성에 현재 사용자 리스너를 통해 state값을 변경할 setState(event.target.value)가 들어간 포인터를 넣어준다.
    또한 input 의 기본 value 속성에 state 프로퍼티를 넣는다.
    value값이 state와 항상 같아지고 이 변경된 데이터를 state lifting(상향식 통신)을 통하여
    부모 컴포넌트에 전달한다.
  */

  const cancleClickHandler = () => {
    props.onCancleForm();
  };
  // ajax 같은거?
  const submitHandler = (event) => {
    // form이 새로고침 되는 것을 막는다.
    event.preventDefault();

    const newExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // 상향식 통신
    props.onSaveExpenseData(newExpenseData);
    props.onFilteredYear(new Date(enteredDate).getFullYear().toString());
    //props.onFilteredYear(enteredDate.substring(0,4));

    // 작성한 내용 비우기
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onCancleForm();
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
        <button type="button" onClick={cancleClickHandler}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
