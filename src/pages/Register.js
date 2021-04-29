import React, { useState } from "react";
import { PageWrap, Container } from "./forms.style";
import { Input, SubmitBtn } from "../components";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const RegisterPage = ({ loggedIn }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(undefined);

  if (loggedIn === true) {
    return <Redirect to="/newsfeed" />;
  }

  function handleChange(value, input) {
    switch (input) {
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
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
      .post("https://backend-curs.herokuapp.com/users/register", {
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  }

  return (
    <PageWrap>
      <Container>
        <h1>Register</h1>
        <p>Create new account</p>
        <Input
          type="text"
          handleChange={(e) => handleChange(e.target.value, "fname")}
          value={fname}
          placeholder="First name"
        />
        <Input
          type="text"
          handleChange={(e) => handleChange(e.target.value, "lname")}
          value={lname}
          placeholder="Last name"
        />
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
        <p>
          Have an account? <Link to="/">Log in</Link>
        </p>
        <SubmitBtn text="Register" handleClick={handleSubmit} />
      </Container>
    </PageWrap>
  );
};

export default RegisterPage;
