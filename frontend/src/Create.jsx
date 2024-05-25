import React, { useState } from "react";
import axios from "axios";
import "./css/Create.css";

function Create({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    console.log(`Add task ${task}`);
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((res) => {
        console.log(res.data);
        addTask(res.data);
        setTask("");
      })
      .catch((err) => {
        console.log("Error at create.jsx post method", err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div id="input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a task"
      />
      <button id="add" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default Create;
