import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  // re-rendering 하기 위해 state의 변화가 필요하다는 것을 잊지 말자
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    };

    props.onAddExpenseData(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let formContent = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  if (isEditing) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancleForm={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
