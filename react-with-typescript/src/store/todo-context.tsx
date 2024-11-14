import React, { useState } from "react";
import { Todo } from "../models/Todo";

export const TodoContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  deleteTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodoHandler = (todoText: string): void => {
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
  };
  const deleteTodoHandler = (id: string): void => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const ctxValue: TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return <TodoContext.Provider value={ctxValue}>{props.children}</TodoContext.Provider>;
};

class TodoContextType {
  items!: Array<Todo>;
  addTodo!: (todoText: string) => void;
  deleteTodo!: (id: string) => void;
}
