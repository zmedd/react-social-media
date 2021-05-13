import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  & > * {
    margin-bottom: 10px;
  }
  margin-bottom: 15px;
`;

export const Footer = styled.div``;

export const Author = styled.div`
  font-weight: 700;
`;

export const Date = styled.div``;

export const Video = styled.video`
  max-width: 100%;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
`;

export const Text = styled.p`
  max-width: 100%;
`;

export const Actions = styled.div`
  display: flex;
`;

export const Button = styled.div`
  display: flex;
  flex: 1;
  padding: 5px 0;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eaeaea;
  }
`;

export const CommentsWrap = styled.div`
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Comment = styled.p``;
