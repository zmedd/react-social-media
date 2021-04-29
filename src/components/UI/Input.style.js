import styled from "styled-components";
import { colors } from "../../const/colors";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputElement = styled.input`
  display: block;
  width: 100%;
  background-color: #ffffff;
  color: ${colors.text.main};
  border: 1px solid ${colors.text.light};
  padding: 6px 20px;
  border-radius: 15px;
  margin-bottom: 5px;
  &:hover {
    border: 1px solid ${colors.text.light};
  }
  &:focus {
    border: 1px solid ${colors.text.light};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: ${colors.text.main};
  margin-bottom: 10px;
`;

export const Error = styled.span`
  display: block;
  font-size: 14px;
  color: ${colors.error};
`;
