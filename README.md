# Task Management App

A full-stack Task Management application built using the MERN stack.  
This application allows users to create, view, update, delete, and manage tasks with different priorities and statuses.

## 🚀 Live Demo

Frontend: https://task-management-app-ashy-one.vercel.app

Backend: https://task-management-app-yaw5.onrender.com

## ✨ Features

- Create new tasks
- View all tasks
- Update task details
- Delete tasks
- Mark tasks as Completed or Pending
- Set task priority
- Set due dates
- Dashboard with task statistics
- Responsive user interface
- REST API integration
- MongoDB database integration

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- CORS

### Deployment
- Vercel – Frontend
- Render – Backend
- MongoDB Atlas – Database

## 📂 Project Structure

```text
Task-Management-App/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/
    ├── models/
    ├── routes/
    ├── controllers/
    ├── index.js
    └── package.json

#⚙️ Run Locally
1. Clone the repository
git clone https://github.com/vishakhar-07/Task-Management-App.git

2. Frontend

cd frontend
npm install
npm run dev
3. Backend

Open another terminal:

cd backend
npm install
npm start

🔗 API Routes

GET    /api/
GET    /api/tasks
POST   /api/add-task
PUT    /api/status/:id
PUT    /api/update-task/:id
DELETE /api/delete-task/:id
GET    /api/getsingletask/:id

👩‍💻 Author

Vishakha Rathod

MERN Stack Developer

