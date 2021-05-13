import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  Author,
  Date,
  Video,
  Image,
  Text,
  Actions,
  Button,
  CommentsWrap,
  Name,
  Comment,
} from "./Post.style";
import { format } from "date-fns";

export const Post = ({ postData }) => {
  const [printDate, setPrintDate] = useState("");

  useEffect(() => {
    const date = new window.Date(postData.date);
    setPrintDate(format(date, "d MMM"));
  }, [postData.date]);

  return (
    <Container>
      <Header>
        <Author>{postData.author}</Author>
        <Date>{printDate}</Date>
      </Header>
      <Content>
        {postData.content.video.map(
          (source, index) => source !== "" && <Video key={index} src={source} />
        )}
        {postData.content.image.map(
          (src, i) => src !== "" && <Image src={src} key={i} />
        )}
        {postData.content.text !== "" && <Text>{postData.content.text}</Text>}
      </Content>
      <Footer>
        <Actions>
          <Button>Like ({postData.likes.length})</Button>
          <Button>Share ({postData.shares.length})</Button>
          <Button>Comment ({postData.comments.length})</Button>
        </Actions>
        {postData.comments.length > 0 &&
          postData.comments.map((comment, i) => (
            <CommentsWrap key={i}>
              <Name>{comment.user}</Name>
              <Comment>{comment.comment_text}</Comment>
            </CommentsWrap>
          ))}
      </Footer>
    </Container>
  );
};
