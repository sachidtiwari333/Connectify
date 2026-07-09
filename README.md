# Social Media Platform (MERN Stack)

A full-stack social media platform built with the MERN stack where users can create an account, share posts, upload images, interact with other users, and build their own social network.

This project demonstrates modern full-stack development practices including authentication, REST APIs, responsive UI, image uploads, and database design.

---

## ✨ Features

### Authentication

* User registration
* Secure login with JWT
* Password hashing using bcrypt
* Protected routes
* Logout functionality

### User Profiles

* Edit profile
* Upload profile picture
* Upload cover image
* Bio and personal information
* View other user profiles

### Posts

* Create posts
* Edit posts
* Delete posts
* Upload images
* View personal posts
* View community feed

### Social Features

* Like posts
* Comment on posts
* Follow users
* Unfollow users
* View followers and following

### User Experience

* Responsive design
* Loading indicators
* Toast notifications
* Form validation
* Error handling

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* React Hook Form

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Multer
* Cloudinary

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```
social-media-platform/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── uploads/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── README.md
├── .gitignore
└── package.json
```

---

## 📸 Screenshots

Add screenshots after completing the project.

* Login Page
* Register Page
* Home Feed
* User Profile
* Create Post
* Mobile View

---

## ⚙ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/social-media-platform.git
```

### Navigate into the project

```bash
cd social-media-platform
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶ Running the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## 📌 API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout
```

### Users

```
GET /api/users/profile

PUT /api/users/profile

POST /api/users/:id/follow

DELETE /api/users/:id/follow
```

### Posts

```
POST /api/posts

GET /api/posts

PUT /api/posts/:id

DELETE /api/posts/:id
```

### Comments

```
POST /api/posts/:id/comment

DELETE /api/comments/:id
```

### Likes

```
POST /api/posts/:id/like
```

---

## 🚀 Future Improvements

* Real-time chat with Socket.io
* Stories
* Notifications
* Infinite scrolling
* Video uploads
* Dark mode
* Search users
* Saved posts
* Explore page
* Admin dashboard

---

## 📚 What I Learned

* Building a complete MERN stack application
* JWT authentication and authorization
* REST API design
* MongoDB data modeling
* Image uploads with Cloudinary
* State management in React
* Responsive UI development
* Secure backend development
* Full-stack deployment

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourusername

Portfolio: https://yourportfolio.com

---

⭐ If you found this project helpful, consider giving it a star!
