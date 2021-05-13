import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Aside = styled.aside`
  width: 280px;
`;

export const Main = styled.main`
  flex: 1;
  margin: 0 40px;
`;

export const StickySidebar = styled.div`
  position: sticky;
  top: 50px;
  background-color: #fafafa;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
