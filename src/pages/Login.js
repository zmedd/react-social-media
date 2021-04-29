import React, { useState } from "react";
import { PageWrap, Container } from "./forms.style";
import { Input, SubmitBtn } from "../components";
import axios from "axios";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  function handleChange(value, input) {
    switch (input) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit() {
    axios
      .post("https://backend-curs.herokuapp.com/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((e) => console.log(e));
  }

  return (
    <PageWrap>
      <Container>
        <h1>Log in</h1>
        <p>Log in to view newsfeed</p>
        <Input
          type="email"
          handleChange={(e) => handleChange(e.target.value, "email")}
          value={email}
          placeholder="E-mail address"
        />
        <Input
          type="password"
          handleChange={(e) => handleChange(e.target.value, "password")}
          value={password}
          placeholder="Password"
          error={error}
        />
        <SubmitBtn text="Log in" handleClick={handleSubmit} />
      </Container>
    </PageWrap>
  );
};

export default LogInPage;
