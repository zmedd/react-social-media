import styled from "styled-components";
import { colors } from "../../const/colors";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.div`
  display: inline-block;
  padding: 6px 20px;
  border-radius: 15px;
  background-color: ${colors.cta};
  color: #ffffff;
  cursor: pointer;
`;
