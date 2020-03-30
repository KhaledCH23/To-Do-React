import React, { Component } from "react";
import "./styles.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class App extends Component {
  state = {
    grabbedValue: "",
    todos: [
      {
        todoText: "is To-do working ?",
        isComplete: false
      }
    ]
  };

  handleOnChange = e => {
    this.setState({ grabbedValue: e.target.value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.grabbedValue) {
      this.setState({
        todos: [
          ...this.state.todos,
          { todoText: this.state.grabbedValue, isComplete: false }
        ],
        grabbedValue: ""
      });
    }
    else {
    alert("Please type something...")
    }
  };
  completeTodo = i => {
    this.setState({
      todos: this.state.todos.map((el, index) =>
        index === i ? { ...el, isComplete: !el.isComplete } : el
      )
    });
  };

  removeTodo = i => {
    // **** FILTER METHOD
    this.setState({
      todos: this.state.todos.filter((el, index) => index !== i)
    });
  };
  render() {
    return (
      <div className="app">
        <div className="searchBar">
          <h1>To-Do App!</h1>
          <h4>Add New To-Do</h4>
          <TodoForm
            onSubmit={this.handleOnSubmit}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="secTitle">
          <h1>Let's get some work done!</h1>
        </div>
        <div>
          <Todo
            todos={this.state.todos}
            todoText={this.state.todoText}
            isComplete={this.state.isComplete}
            completeTodo={this.completeTodo}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
