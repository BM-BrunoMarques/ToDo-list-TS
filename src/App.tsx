import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [allTodos, setTodos] = useState([
    { id: "1", text: "Learn TypeScript" },
  ]);

  const todoAddHandler = (message: string) => {
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          id: prevState[prevState.length - 1].id + 1,
          text: message,
        },
      ];
    });
  };

  useEffect(() => {
    console.log("state changed ", allTodos);
  }, [allTodos]);
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList allTodos={allTodos} />
    </div>
  );
};

export default App;
