import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={todo.isComplete ? "todo-item complete" : "todo-item"}>
          <span>{todo.text}</span>
          <div className="todo-buttons">
            <button
              onClick={() => completeTodo(index)}
              className="complete-button">
              {todo.isComplete ? "Incomplete" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(index)} className="delete-button">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
