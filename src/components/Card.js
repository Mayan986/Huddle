import React from "react";
import { CardStyled } from "./styles/Card_Styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <CardStyled layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </CardStyled>
  );
}
