Task Manager Application
This is a Task Manager application built with Vite, React, Tailwind CSS, and FastAPI with SQLAlchemy.

Table of Contents
Features
Prerequisites
Installation
Running the Application
Project Structure
Usage
Contributing
License
Features
Manage tasks with statuses: "To Do", "In Progress", and "Done".
Create, update, and delete tasks.
Modal for task creation and updates.
User-friendly interface with Tailwind CSS.
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14 or higher)
Python (v3.7 or higher)
FastAPI and SQLAlchemy
Installation
Clone the repository:

bash
Copy code
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
cd backend
uvicorn main:app --reload
The backend server will start at http://127.0.0.1:8000.

Start the frontend development server:

bash
Copy code
cd ../frontend
npm run dev
The frontend will start at http://localhost:3000.

bash
Copy code
http://localhost:3000
Use the interface to manage your tasks:

Add new tasks using the "Add Task" button.
Edit existing tasks by clicking the "Edit" button next to a task.
Delete tasks by clicking the "Delete" button next to a task.
Contributing
To contribute to this project, please fork the repository and create a pull request.

Fork the repository.
Create a branch: git checkout -b feature/your-feature-name.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature-name.
Open a pull request.
License
This project is licensed under the MIT License.
