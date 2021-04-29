import React, { useState, useEffect } from "react";
import { Header as H, Container, Brand, User } from "./Header.style";
import { Link } from "react-router-dom";

const initialState = {
  avatar: {
    large: "",
  },
  id: "",
  dateRegistered: "",
  online: false,
  _id: "",
  first_name: "",
  last_name: "",
  email: "",
  profile_URL: "",
  password: "",
  __v: 0,
};

export const Header = () => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    setUser(JSON.parse(localStorage.user));
  }, []);

  return (
    <H>
      <Container>
        <Brand>Social media</Brand>
        <User>
          <Link to={user.profile_URL}>
            <img
              src={user.avatar}
              alt={user.first_name + " " + user.last_name}
            />
            <span>{user.first_name}</span>
          </Link>
        </User>
      </Container>
    </H>
  );
};
