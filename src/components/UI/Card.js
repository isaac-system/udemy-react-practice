//import "./Card.css";

import styled from "styled-components";

const CardStyledDiv = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;
const Card = (props) => {
  const classes = props.className;

  return <CardStyledDiv className={classes}>{props.children}</CardStyledDiv>;
};

export default Card;
