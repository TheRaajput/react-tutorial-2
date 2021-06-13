import React from "react";
import styles from "./UI.module.css";

const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
