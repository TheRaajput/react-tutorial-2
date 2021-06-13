import React from "react";
import styles from "./UI.module.css";

const Card = (props) => {
  let classes = props.className + " " + styles.card;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
