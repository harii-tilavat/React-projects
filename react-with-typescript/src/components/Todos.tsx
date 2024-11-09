import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todo-context";
const Todos: React.FC = (props) => {
  const { items } = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
