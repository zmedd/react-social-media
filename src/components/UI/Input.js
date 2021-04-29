import React from "react";
import { Container, InputElement, Label, Error } from "./Input.style";

export const Input = ({
  label,
  error,
  type,
  handleChange,
  value,
  placeholder,
}) => {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <InputElement
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {!!error && <Error>{error}</Error>}
    </Container>
  );
};
