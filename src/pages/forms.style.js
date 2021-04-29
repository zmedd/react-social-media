import styled from "styled-components";
import { colors, shadows } from "../const/colors";

export const PageWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: ${shadows.card};
  color: ${colors.text.main};
  padding: 20px 35px;
`;
