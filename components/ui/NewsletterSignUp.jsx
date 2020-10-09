import React, { useState } from "react";
import styled from "@emotion/styled";
const NewsletterSignUp = () => {
  const [email, setEmail] = useState({
    email: "",
  });

  const { data } = email;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Customer@email.com"
        name="email"
        value={data}
        onChange={handleChange}
      />
      <input type="submit" value="Sign up" />
    </Form>
  );
};

export default NewsletterSignUp;

// Styled Components

const Form = styled.form`
  margin-top: 100px;
  position: relative;
  z-index: 2;
  input {
    width: 100%;
    font-size: 15px;
    font-size: 1.5rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 3px;
    font-family: "Rubik", sans-serif;
    display: block;
    padding-left: 15px;
    @media (min-width: 768px) {
      max-width: 345px;
      margin: 60px 0 0;
    }
    &[type="email"] {
      height: 35px;
      @media (min-width: 768px) {
        height: 67px;
      }
    }
    &[type="submit"] {
      height: 67px;
      margin-top: 25px;
    }
  }
`;
