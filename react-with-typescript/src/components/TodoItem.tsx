import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ todoText: string }> = ({ todoText }) => {
  return <li className={classes.item}>{todoText}</li>;
};

export default TodoItem;
