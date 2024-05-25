const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/todo");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todo");

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task: task })
    .then((task) => {
      res.json(task); // Return the created task as a response
    })
    .catch((err) => {
      console.log("Error at /add route", err);
      if (!res.headersSent) {
        res.status(500).send("Error creating task");
      }
    });
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      if (!res.headersSent) {
        res.status(500).json(err);
      }
    });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findById(id)
    .then((task) => {
      if (!task) {
        return res.status(404).send("Task not found");
      }
      task.done = !task.done; // Toggle the done status
      return task.save();
    })
    .then((updatedTask) => res.json(updatedTask))
    .catch((err) => {
      if (!res.headersSent) {
        res.status(500).json(err);
      }
    });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send("Task not found");
      }
      res.send("Task deleted");
    })
    .catch((err) => {
      if (!res.headersSent) {
        res.status(500).json(err);
      }
    });
});

app.listen(3001, () => {
  console.log("Server is running http://localhost:3001");
});
