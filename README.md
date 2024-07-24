# Task Manager Application

This is a Task Manager application built with Vite, React, Tailwind CSS, and FastAPI with SQLAlchemy.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)

## Features

- Manage tasks with statuses: "To Do", "In Progress", and "Done".
- Create, update, and delete tasks.
- Modal for task creation and updates.
- User-friendly interface with Tailwind CSS.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- Python (v3.7 or higher)
- FastAPI and SQLAlchemy

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Maneek4949/Task-Management.git
   cd task-manager
2.Install the frontend dependencies:
cd client
npm install
3.Install the backend dependencies:
cd ../server
python -m venv venv
source venv/bin/activate # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt


Here’s the README content in code format for easy copying:

markdown
Copy code
# Task Manager Application

This is a Task Manager application built with Vite, React, Tailwind CSS, and FastAPI with SQLAlchemy.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Manage tasks with statuses: "To Do", "In Progress", and "Done".
- Create, update, and delete tasks.
- Modal for task creation and updates.
- User-friendly interface with Tailwind CSS.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- Python (v3.7 or higher)
- FastAPI and SQLAlchemy

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
Install the frontend dependencies:

bash
Copy code
cd frontend
npm install
Install the backend dependencies:

bash
Copy code
cd ../backend
python -m venv venv
source venv/bin/activate # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt


Running the Application
Start the backend server:

bash
Copy code
cd server
uvicorn main:app --reload
The backend server will start at http://127.0.0.1:8000.

Start the frontend development server:

bash
Copy code
cd ../client
npm run dev
The frontend will start at http://localhost:3000.




