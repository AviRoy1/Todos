import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    input: "",
  };

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (input.trim() !== "") {
      this.props.addTodo({
        text: input,
        isComplete: false,
      });
      this.setState({ input: "" });
    }
  };

  // Function to handle input change
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;

    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={this.handleChange}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
