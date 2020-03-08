import React from "react";

const TodoForm = ({ onChange, onSubmit }) => {
  return (
    <div>
      <input
        type="text"
        className="bar"
        onChange={onChange}
        placeholder="Enter new task"
      />
      <button className="btnAdd" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};
export default TodoForm;
