import React from "react";

function Todo({ todos, todoText, isComplete, completeTodo, removeTodo }) {
  return todos.map((el, i) => (
    <div className="todo" key={i}>
      <button className="completeBtn" onClick={() => completeTodo(i)}>
        {el.isComplete ? "Undo" : "Complete"}
      </button>
      <button class="delBtn" onClick={() => removeTodo(i)}>
        Delete
      </button>
      <strong>
        <span style={{ textDecoration: el.isComplete ? "line-through" : "" }}>
          {el.todoText}
        </span>
      </strong>
    </div>
  ));
}
export default Todo;
