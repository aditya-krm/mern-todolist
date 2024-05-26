# MERN TodoList App

## Description

The MERN TodoList app is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create, read, update, and delete tasks in a to-do list. The application is structured with a backend server using Node.js and Express, a frontend client using React, and a MongoDB database for data storage.

## Table of Contents

- [Installation](#Installation)s
- [Features](#Features)
- [learning-outcomes](#learning-outcomes)
- [project-structure](#project-structure)

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aditya-krm/mern-todolist.git
   cd mern-todolist
   ```

2. **Install dependencies:**
   only need to run the command it will install all the dependencies for frontend and backend.

```bash
npm run install:all
```

3. after installation run this command for run the project:

```bash
npm start
```

This command will concurrently start the backend server and the frontend development server.

The backend server will run on http://localhost:5173.
The frontend development server will run on http://localhost:3001.

4. Start the MongoDB server if it's not already running:

```sh
mongod
```

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A web application framework for Node.js.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Cors**: A package to enable Cross-Origin Resource Sharing.
- **Nodemon**: A tool that helps develop node.js based applications by automatically restarting the node application when file changes are detected.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **ESLint**: A static code analysis tool for identifying problematic patterns found in JavaScript code.

### Development Tools

- **Concurrently**: A tool to run multiple commands concurrently.

## Features

- Add new tasks
- Toggle the completion status of tasks
- Delete tasks
- Real-time updates without needing to reload the page

## learning-outcomes

By working on this project, i learned:

- How to set up a Node.js and Express backend server.
- How to use Mongoose to interact with MongoDB.
- How to build a React application and manage state with hooks.
- How to make HTTP requests from a React frontend to a backend server using Axios.
- How to handle asynchronous operations and manage application state.
- How to use Vite for fast development builds and ES module support.
- How to use Nodemon to automatically restart the server on code changes.
- How to enable CORS to allow cross-origin requests between the frontend and backend.
- How to run multiple commands concurrently using the concurrently package.

## project-structure

```sh
mern-todolist/
├── frontend/ # Frontend React application
│ ├── public/ # Public files (e.g. images, fonts)
│ ├── src/ # Source code for React components
│ ├── index.html # Main HTML file for the application
│ ├── package.json # List of dependencies and scripts for frontend
│ └── vite.config.js # Configuration file for Vite bundler
├── server/ # Backend Express server
│ ├── models/ # Mongoose models for data representation
│ ├── server.js # Main entry point for the server
│ ├── package.json # List of dependencies and scripts for backend
├── package.json # Root project dependencies and scripts
└── README.md # This file (project documentation)
```

With this structure and the provided information, you should be able to set up and run the MERN TodoList App effectively. Happy coding!

### if any restructuring is needed in readme.md, please feel free to do so.
