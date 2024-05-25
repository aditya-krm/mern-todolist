import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import "./css/Home.css";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTask = (newTask) => {
    setTodos((prevTodos) => [...prevTodos, newTask]);
  };

  const updateTask = (id, currentDone) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then((result) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo._id === id ? { ...todo, done: !currentDone } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>TodoList</h1>
      <div className="main">
        <Create addTask={addTask} />
        {todos.length === 0 ? (
          <h2>No todos</h2>
        ) : (
          todos.map((todo, index) => (
            <div id="todo" key={index}>
              <input
                type="checkbox"
                checked={todo.done}
                onClick={() => updateTask(todo._id, todo.done)}
              />
              <span className={todo.done ? "done" : ""} id="task">
                {todo.task}
              </span>
              <button onClick={() => deleteTask(todo._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
