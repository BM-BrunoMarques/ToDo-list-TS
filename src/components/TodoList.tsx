import React from "react";

interface TodoListProps {
  allTodos: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { allTodos } = props;
  
  return (
    <ul>
      {allTodos.length && (
        <div>
          {allTodos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </div>
      )}
    </ul>
  );
};

export default TodoList;
