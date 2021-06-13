import React, { useState } from "react";
import Card from "./components/UI/Card";
import styles from "./App.module.css";
import InputForm from "./components/Input/InputForm";
import Modal from "./components/UI/Modal";

const App = () => {
  const [Userdata, setUserdata] = useState([]);
  const [show, setShow] = useState(false);
  const [Message, setMessage] = useState("");
  const addUserData = (userData) => {
    if (userData.age === "" || userData.username === "") {
      setShow(true);
      setMessage("Please enter a valid name and age(non-empty values)");
    } else if (userData.username && userData.age < 0) {
      setShow(true);
      setMessage("Please enter a valid age (>0).");
    } else {
      setUserdata((prevUser) => {
        return [userData, ...prevUser];
      });
    }
  };
  let content;
  if (Userdata.length !== 0) {
    content = (
      <Card className={styles.padding_prop}>
        {Userdata.map((el) => (
          <p key={el.id}>
            {el.username} ({el.age} years old)
          </p>
        ))}
      </Card>
    );
  }
  return (
    <div>
      <Modal body={Message} show={show} onClose={() => setShow(false)} />
      <Card>
        <InputForm onaddUserData={addUserData} />
      </Card>
      {content}
    </div>
  );
};

export default App;
