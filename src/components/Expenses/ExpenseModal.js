import React from "react";

import styled, { keyframes } from "styled-components";

const Layer = styled.div`
  z-index: 1500;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Modal = styled.div`
  z-index: 2000;
  background: #ff0102;
  position: absolute;
  border-radius: 10px;

  ul {
    list-style: none;
    padding: 0px 10px;
    color: white;
  }
`;

const ExpenseModal = (props) => {
  const onBlurHandler = () => {
    props.onBlur();
  };

  const onDeleteHandler = () => {
    props.onDelete();
  };

  return (
    <div>
      <Layer onClick={onBlurHandler} />
      <Modal>
        <ul>
          <li onClick={onDeleteHandler}>삭제</li>
        </ul>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
