import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";
const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodoContext);

  const inputRef = useRef<HTMLInputElement>(null);
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) return;
    addTodo(enteredText);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
