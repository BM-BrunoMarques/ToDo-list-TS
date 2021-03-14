import React from "react";
import "./TodoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  onDelTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, onDelTodo } = props;

  return (
    <ul>
      {todos.length > 0 && (
        <div>
          {todos.map((todo: any) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={onDelTodo.bind(null, todo.id)}>Done.</button>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
};

export default TodoList;
