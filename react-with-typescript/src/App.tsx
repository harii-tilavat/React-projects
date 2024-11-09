import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const addTodoHandler = (todoText: string): void => {
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
