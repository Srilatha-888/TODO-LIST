import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = (todo) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, todo]);
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const initialFormValues =
    editIndex !== null ? todos[editIndex] : { name: "", email: "" };

  return (
    <div className="container">
      <div className="todo-container">
        <div className="todo-title">TODO LIST</div>
        <hr className="todo-separator" />
        <TodoForm
          onSubmit={handleAddOrEdit}
          initialValues={initialFormValues}
          isEditing={editIndex !== null}
        />
        <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;
