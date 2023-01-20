import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const changeYearHandler = (event) => {
    props.onUpdateYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div>
          <label>Filter</label>
        </div>
        <div>{props.children}</div>
        <div>
          <select value={props.selectedYear} onChange={changeYearHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
