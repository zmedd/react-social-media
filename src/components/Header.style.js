import styled from "styled-components";

export const Header = styled.header`
  background-color: #2b2922;
  color: #fafafa;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const Brand = styled.div``;

export const User = styled.div`
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      width: 30px;
      height: 30px;
      margin-right: 5px;
      border-radius: 50%;
    }
    span {
      color: #fafafa;
      text-transform: capitalize;
    }
  }
`;
