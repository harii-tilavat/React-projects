import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Array<Todo> }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem todoText={item.text} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
