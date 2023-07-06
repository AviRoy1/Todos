import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    todos: [],
  };

  // Function to add a new todo
  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  // Function to delete a todo
  deleteTodo = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };

  // Function to mark a todo as complete
  completeTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[index].isComplete = !updatedTodos[index].isComplete;
      return { todos: updatedTodos };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
