import React, { useContext } from "react";
import classes from "./TodoItem.module.css";
import { Todo } from "../models/Todo";
import { TodoContext } from "../store/todo-context";
const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <li className={classes.item} onClick={() => deleteTodo(todo.id)}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
