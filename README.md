# 📚 Leitner Flashcard App

🚀 **A full-stack flashcard learning app implementing the Leitner System using MERN stack.**  

## 📌 Features
✅ **Add, Update, Delete Flashcards**  
✅ **Leitner System for Spaced Repetition**  
✅ **JWT Authentication (Login & Register)**  
✅ **Dark Mode Toggle**  
✅ **Progress Tracking (Daily Flashcard Count)**  
✅ **Beautiful UI with Framer Motion Animations**  
✅ **Fully Responsive Design**  

---

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS, Axios, Framer Motion  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **Deployment:** Vercel (Frontend), Render (Backend)  

---

## 📜 Thought Process & Approach
### **1️⃣ Understanding the Leitner System**
- Flashcards start in **Box 1**  
- If answered **correctly**, they move to the next box  
- If answered **incorrectly**, they go back to **Box 1**  
- Higher boxes have **longer review intervals**  

### **2️⃣ Backend Implementation (Node.js + Express + MongoDB)**
- **API Endpoints:**  
  - `POST /flashcards` → Add a new flashcard  
  - `GET /flashcards` → Fetch all flashcards  
  - `PUT /flashcards/:id` → Update flashcard (move to next box)  
  - `DELETE /flashcards/:id` → Remove a flashcard  
- **JWT Authentication** for user login and saving progress  
- **MongoDB Schema:** Stores question, answer, Leitner box, and review date  

### **3️⃣ Frontend Implementation (React + Tailwind CSS)**
- **Dark Mode Toggle 🌙** for better UX  
- **Framer Motion Animations 🎭** for smooth transitions  
- **Protected Routes** to restrict access to logged-in users  
- **Axios for API Requests** with JWT token authentication  

---

## 📌 Setup Instructions

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/mayankkmauryaa/ALFREDTASK.git
cd ALFREDTASK
```
### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
- **Create a .env file in the backend folder:**
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
- **Start the backend server:**
```sh
npm run dev
```
### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```
- Open `http://localhost:3000` in your browser.

## **📝 Author**

### Created by **Mayank Maurya**
---
🔗 GitHub: https://github.com/mayankkmauryaa
