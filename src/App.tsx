import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn TypeScript" },
  ]);

  const todoAddHandler = (message: string) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.random().toString(),
        text: message,
      },
    ]);
  };

  const todoDelHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((state) => state.id !== todoId));
  };

  useEffect(() => {
    console.log("state changed ", todos);
  }, [todos]);
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDelTodo={todoDelHandler} />
    </div>
  );
};

export default App;
