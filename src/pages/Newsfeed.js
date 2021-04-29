import React from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../components";

const NewsfeedPage = ({ loggedIn, handleLogOut, user }) => {
  !loggedIn && <Redirect to="/" />;

  console.log(loggedIn, user);

  return (
    <div>
      <Header />
      <h1>Newsfeed page</h1>
    </div>
  );
};

export default NewsfeedPage;
