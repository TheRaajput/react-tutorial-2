import React, { useState } from "react";
import NewUser from "./NewUser";

const InputForm = (props) => {
  const [Username, setUsername] = useState("");
  const [Age, setAge] = useState("");
  const submitHandler = (events) => {
    events.preventDefault();
    let data = {
      id: Math.random(),
      username: Username,
      age: Age,
    };
    props.onaddUserData(data);
    setUsername("");
    setAge("");
  };
  const UsernameHandler = (events) => {
    setUsername(events.target.value);
  };
  const AgeHandler = (events) => {
    setAge(events.target.value);
  };
  return (
    <NewUser
      UserNameVal={Username}
      AgeVal={Age}
      UsernameHandler={UsernameHandler}
      AgeHandler={AgeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default InputForm;
