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
  const [title, setTitle] = useState(props.title);
  const [isTitleSetting, setIsTitleSetting] = useState(false);
  // 새로운 값을 할당하는데 왜 const를 사용하는가?
  // ???
  console.log("ExpenseItem evaluated by React");
  // 4 번 반복됨 why? Expense에서 컴포넌트의 독립적인 4개의 인스턴스가 생성되기 때문에
  // 그러나 clickHanlder 가 작동할 떄 1번만 나타남 why ? 위에 말했듯이 독립적인 하나의 인스턴스만 updated 되기 때문에
  // !!! state는 컴포넌트의 각각의 인스턴트 별로 나누어져 있다
  /*
  const clickHandler = () => {
    //setTitle("Updated!!");
    // state의 값을 변경할 떄 그 인스터스가 다시 rendering 된다.
  };
  */
  const titleDoubleClickHandler = () => {
    setIsTitleSetting(!isTitleSetting);
    if (isTitleSetting) {
      submitTitleHandler();
    }
  };

  const keyEnter = (event) => {
    if (event.key === "Enter") {
      setIsTitleSetting(!isTitleSetting);
      submitTitleHandler();
    }
  };

  const updateTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitTitleHandler = () => {
    const expenseData = {
      ...props,
      title: title,
    };
    props.onChagneExpenseData(expenseData);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div
        className="expense-item__description"
        onDoubleClick={titleDoubleClickHandler}
      >
        {isTitleSetting ? (
          <input
            value={title}
            onChange={updateTitleHandler}
            onKeyDown={keyEnter}
          />
        ) : (
          <h2>{title}</h2>
        )}
        <div className="expense-item__price">${props.amount}</div>
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
