import React from "react";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, idx) => (
        <li className="todo-item" key={idx}>
          <div>
            <div style={{ fontWeight: "bold" }}>{todo.name}</div>
            <div style={{ color: "#555", fontSize: "0.95em" }}>{todo.email}</div>
          </div>
          <div className="todo-actions">
            <button className="delete-btn" onClick={() => onDelete(idx)}>Delete</button>
            <button className="edit-btn" onClick={() => onEdit(idx)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
