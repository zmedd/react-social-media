import React from "react";
import { Container, Button } from "./SubmitBtn.style";

export const SubmitBtn = ({ text, handleClick }) => {
  return (
    <Container>
      <Button onClick={handleClick}>{text}</Button>
    </Container>
  );
};
