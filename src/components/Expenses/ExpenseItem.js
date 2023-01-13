import React, { useState } from "react";

import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";

const ExpenseItem = (props) => {
  /* hardcode
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  */
  const [inputs, setInputs] = useState({
    date: props.date,
    title: props.title,
    amount: props.amount,
  });

  const [isInputSetting, setIsInputSetting] = useState({
    date: false,
    title: false,
    amount: false,
  });
  // 새로운 값을 할당하는데 왜 const를 사용하는가?
  // ???
  //console.log("ExpenseItem evaluated by React");
  // 4 번 반복됨 why? Expense에서 컴포넌트의 독립적인 4개의 인스턴스가 생성되기 때문에
  // 그러나 clickHanlder 가 작동할 떄 1번만 나타남 why ? 위에 말했듯이 독립적인 하나의 인스턴스만 updated 되기 때문에
  // !!! state는 컴포넌트의 각각의 인스턴트 별로 나누어져 있다
  /*
  const clickHandler = () => {
    //setTitle("Updated!!");
    // state의 값을 변경할 떄 그 인스터스가 다시 rendering 된다.
  };
  */
  const { date, title, amount } = inputs;

  const onChangeHandler = (event) => {
    const { value, name, type } = event.target;
    console.log(type);
    setInputs((prevState) => {
      if (type !== "date") {
        return { ...prevState, [name]: value };
      } else {
        return { ...prevState, [name]: new Date(value) };
      }
    });
  };

  const submitHandler = () => {
    const expenseData = {
      ...props,
      date: new Date(date),
      title: title,
      amount: +amount,
    };

    setIsInputSetting({
      date: false,
      title: false,
      amount: false,
    });

    props.onChagneExpenseData(expenseData);
  };

  const doubleClickHandler = ({ name }) => {
    if (name) {
      setIsInputSetting((prevState) => {
        return { ...prevState, [name]: !prevState.name };
      });
    }
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <Card className="expense-item">
      {isInputSetting.date ? (
        <input
          name="date"
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          onChange={onChangeHandler}
          onKeyDown={enterHandler}
          onBlur={submitHandler}
          onDoubleClick={doubleClickHandler}
        />
      ) : (
        <ExpenseDate date={date} onDoubleClick={doubleClickHandler} />
      )}

      <div className="expense-item__description">
        {isInputSetting.title ? (
          <input
            value={title}
            name="title"
            type="text"
            onChange={onChangeHandler}
            onKeyDown={enterHandler}
            onBlur={submitHandler}
            onDoubleClick={doubleClickHandler}
          />
        ) : (
          <h2
            onDoubleClick={(e) => {
              doubleClickHandler({ name: "title" });
            }}
          >
            {title}
          </h2>
        )}
        <div className="expense-item__price">
          {isInputSetting.amount ? (
            <input
              value={amount}
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              onChange={onChangeHandler}
              onKeyDown={enterHandler}
              onBlur={submitHandler}
              onDoubleClick={doubleClickHandler}
            />
          ) : (
            <h2
              onDoubleClick={(e) => {
                doubleClickHandler({ name: "amount" });
              }}
            >
              ${amount}
            </h2>
          )}
        </div>
      </div>
      {/* 
      clickHandler()가 아니라  clickHandler 라는 포인터를 전달한다.
      why ?
      {clickHandler()} 
      클릭 했을 때 clickHandler가 실행되는 것이 아닌
      이 JSX 코드가 재평가 되었을 때 실행된다.
      */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
