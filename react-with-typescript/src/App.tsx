import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";
import NewTodo from "./components/NewTodo";
import { TodoContext, TodoContextProvider } from "./store/todo-context";

function App() {
  

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos/>
    </TodoContextProvider>
  );
}

export default App;
