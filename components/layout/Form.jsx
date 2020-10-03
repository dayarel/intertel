import React, { useState } from "react";
import styled from "@emotion/styled";

const Form = ({ type }) => {
  const [data, setData] = useState({
    name: "",
    second: "",
    email: "",
    message: "",
  });

  const { name, second, email, message } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormWrapper onSubmit={handleSubmit} type={type}>
      <div className="name-wrapper">
        <input
          type="text"
          name="name"
          placeholder="First Name*"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="second"
          value={second}
          placeholder="Second Name*"
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email Name*"
        onChange={handleChange}
      />
      <textarea
        name="message"
        onChange={handleChange}
        value={message}
        placeholder="Message*"
      >
        Message*
      </textarea>
      <input type="submit" value="Send" />
    </FormWrapper>
  );
};

export default Form;

// Styled Components

const FormWrapper = styled.form`
  margin-top: 46px;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 0;
  }
  input,
  textarea {
    ::placeholder {
      text-align: left;
      font-size: 13px;
      font-size: 1.3rem;
      line-height: 36px;
      line-height: 3.6rem;
      opacity: 0.5;
    }
    width: 100%;
    background-color: transparent;
    font-size: 13px;
    font-size: 1.3rem;
    line-height: 36px;
    line-height: 3.6rem;
    border-radius: 3px;
    border: 1px solid white;
    padding-left: 11px;
    text-align: left;
    font-family: "Rubik", sans-serif;
    color: white;
    margin-top: 20px;
  }
  input {
    height: 36px;
    &[type="submit"] {
      height: 55px;
      height: 55px;
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-size: 1.5rem;
      line-height: 55px;
      line-height: 5.5rem;
      width: 100%;
      max-width: 342px;
      transition: all 0.35s ease-in-out;
      &:hover {
        background-color: white;
        color: #031759 !important;
      }
    }
  }
  textarea {
    height: 190px;
    margin-top: 21px;
    color: white;
  }
  .name-wrapper {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        flex: 0 0 48%;
        margin: 0;
      }
    }
  }
`;
