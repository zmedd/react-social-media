import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Header, Post } from "../components";
import { Container, Aside, Main, StickySidebar } from "./Newsfeed.style";
import axios from "axios";

const NewsfeedPage = ({ loggedIn, handleLogOut, user }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  !loggedIn && <Redirect to="/" />;

  useEffect(() => {
    axios
      .get("https://backend-curs.herokuapp.com/posts", {
        Authorization: `Bearer ${localStorage.token}`,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => alert(`Whoops: ${JSON.stringify(error)}`));
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Aside>
          <StickySidebar>sticky</StickySidebar>
        </Aside>
        <Main>
          {loading ? (
            <div>Please wait...</div>
          ) : (
            posts.map((post, i) => <Post postData={post} key={i} />)
          )}
        </Main>
        <Aside>
          <StickySidebar>sticky</StickySidebar>
        </Aside>
      </Container>
    </div>
  );
};

export default NewsfeedPage;
