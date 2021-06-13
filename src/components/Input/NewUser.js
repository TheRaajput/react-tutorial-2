import React from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  return (
    <form className={styles.form} onSubmit={props.submitHandler}>
      <div>
        <div className={styles["form-group"]}>
          <label className={styles["form-group__label"]}>Username</label>
          <input
            id="name"
            className={styles["form-group__input"]}
            type="text"
            value={props.UserNameVal}
            onChange={props.UsernameHandler}
          ></input>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["form-group__label"]}>Age (Years)</label>
          <input
            id="age"
            className={styles["form-group__input"]}
            type="number"
            value={props.AgeVal}
            onChange={props.AgeHandler}
          ></input>
        </div>
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default NewUser;
