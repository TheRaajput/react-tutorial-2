import React from "react";
import Card from "./Card";
import styles from "./UI.module.css";
import Button from "./Button";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <Card>
        <div className={styles.Modal__head}>
          <h4>Invalid Input</h4>
        </div>
        <div className={styles.Modal__body}>{props.body}</div>
        <div className={styles.Modal__foot}>
          <Button onClick={props.onClose}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
