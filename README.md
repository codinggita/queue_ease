# queue_ease

# 🚀 Smart Queue Management System

A **Smart Queue Management System** is a full stack web application designed to digitize traditional queue systems used in places like hospitals, banks, government offices, and service centers.

The system allows users to **book service tokens online, track their queue position, and reduce waiting time**, while administrators can manage queues efficiently.

---

# 📌 Problem Statement

In many service organizations such as hospitals, banks, and government offices, people often need to wait in **long physical queues** to access services.

This creates several problems:

- ⏳ Long waiting times
- 👥 Overcrowded waiting areas
- ❓ Lack of transparency about queue position
- 📉 Inefficient service management

The **Smart Queue Management System** aims to solve these problems by providing a **digital platform for online token booking and queue tracking**.

---

# 💡 Proposed Solution

This system provides a **web-based queue management platform** where users can:

- Register and login
- Book service tokens online
- Track their queue position
- View estimated waiting time
- Cancel or manage tokens

Admins can monitor and manage the queue through a dashboard.

---

# 🎯 Project Objectives

- Digitize traditional queue systems
- Reduce waiting time
- Improve service efficiency
- Provide real-time queue tracking
- Demonstrate full stack MERN development

---

# 🛠 Tech Stack

## Frontend
- ReactJS
- Tailwind CSS
- React Router

## Backend
- Node.js
- Express.js

## Database
- MongoDB

---

# ⚙️ Core Features

### 👤 Authentication System
- Signup
- Login
- Logout
- Password validation
- Protected routes

### 🎫 Token Booking System
- Book service tokens
- Track token number
- Cancel tokens

### 📊 Queue Tracking
- Current token being served
- User token number
- Remaining queue count

### 🔎 Search, Filter & Sorting
- Search tokens
- Filter by service
- Sort tokens by time

### 📄 Pagination
Pagination is implemented for large datasets such as token lists.

### ⚡ Debouncing
Search input uses **debouncing** to prevent excessive API calls.

### 🌙 Theme Support
- Dark Mode
- Light Mode
- Theme stored in LocalStorage

### 🔁 CRUD Operations
- Create → Book token
- Read → View tokens
- Update → Update token status
- Delete → Cancel token

---

# 🔥 Additional Innovative Features

- ⏳ Estimated waiting time
- 🔄 Live queue updates
- 📱 QR code token system
- 📊 Admin analytics dashboard
- 🏥 Multi-service queue support
- ⭐ Priority queue support

---

# 📱 Application Pages

- Home Page
- Signup Page
- Login Page
- Dashboard
- Queue Status Page
- Profile / Settings Page
- Admin Dashboard

---

# 🧠 React Hooks Used

The project demonstrates usage of important React hooks:

- `useState`
- `useEffect`
- `useRef`
- `useContext`

---

# 🔗 Backend API Routes

### Authentication

POST /api/auth/signup  
POST /api/auth/login  

### Tokens

POST /api/token/book  
GET /api/token  
PUT /api/token/cancel/:id  

### Queue

GET /api/queue/status  
GET /api/queue/current  

### Admin

GET /api/admin/tokens  
PUT /api/admin/next-token  

---

# 🗄 Database Design

### Users Collection

{
_id,
name,
email,
password,
role
}


### Services Collection


{
_id,
serviceName,
description
}


### Tokens Collection


{
_id,
userId,
serviceId,
tokenNumber,
status,
createdAt
}


---

# 📂 Project Structure


smart-queue-management-system
│
├── backend
│ │
│ ├── config
│ │ └── db.js
│ │
│ ├── controllers
│ │ ├── authController.js
│ │ ├── tokenController.js
│ │ └── queueController.js
│ │
│ ├── middleware
│ │ └── authMiddleware.js
│ │
│ ├── models
│ │ ├── User.js
│ │ ├── Service.js
│ │ └── Token.js
│ │
│ ├── routes
│ │ ├── authRoutes.js
│ │ ├── tokenRoutes.js
│ │ └── queueRoutes.js
│ │
│ ├── server.js
│ └── package.json
│
├── frontend
│ │
│ ├── public
│ │
│ ├── src
│ │ │
│ │ ├── components
│ │ │ ├── Navbar.jsx
│ │ │ ├── TokenCard.jsx
│ │ │ ├── QueueStatus.jsx
│ │ │ └── Pagination.jsx
│ │ │
│ │ ├── pages
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── Profile.jsx
│ │ │
│ │ ├── context
│ │ │ └── AuthContext.jsx
│ │ │
│ │ ├── services
│ │ │ └── api.js
│ │ │
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ │
│ └── package.json
│
└── README.md


---

# 📱 Responsive Design

The UI is built using **Tailwind CSS**, ensuring responsiveness across:

- Desktop
- Tablet
- Mobile devices

---

# ❗ Error Handling

### Backend
- Try-catch blocks
- Proper HTTP status codes

### Frontend
- Error messages
- Loading indicators
- API error handling

---

# 🚀 Future Improvements

- Real-time notifications
- SMS alerts
- AI-based waiting time prediction
- Mobile app integration

---

# 🏆 Benefits of the System

- Reduces waiting time
- Improves service efficiency
- Enhances user experience
- Provides transparent queue management

---

# 👨‍💻 Developed For

**Full Stack Hackathon Event**

Using **MERN Stack (MongoDB, Express.js, React.js, Node.js)**
