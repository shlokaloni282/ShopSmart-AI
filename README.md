# 🛍️ ShopSmart-AI

**An AI-powered e-commerce application built with the MERN stack.**

ShopSmart-AI aims to make online shopping smarter by combining a modern shopping experience with AI-assisted product discovery. The project is being developed to explore full-stack web development, REST API design, database integration, authentication, and practical AI integration.

## ✨ Features

- **Product Management:** Store and retrieve product information using MongoDB and REST APIs.
- **User Authentication:** Registration and login with password hashing and JWT-based authentication.
- **Natural-Language Product Search (Planned):** Allow users to describe what they need in everyday language, such as _"Find wireless headphones under ₹2,000 with long battery life."_ The system will extract relevant preferences and find matching products from the catalogue.
- **Responsive Shopping Interface:** A React-based interface for browsing products.

> **Project status:** Under development. Features are being implemented and tested incrementally. See the sections below for planned functionality.

## 🧠 Planned AI Feature

### Natural-Language Product Search

Traditional e-commerce search often relies on exact product names and keywords. ShopSmart-AI aims to let users search using natural-language requests.

**Example query:**

> "Find a wireless mouse under ₹1,000 for college."

The planned workflow:

1. Interpret the user's request and identify preferences such as product category, budget, and intended use.
2. Convert those preferences into structured search criteria.
3. Retrieve matching products from the MongoDB catalogue.
4. Display relevant results based on the user's requirements.

The goal is to combine natural-language understanding with structured database filtering rather than relying on an AI model to invent product details.

## 🛠️ Tech Stack

| Technology | Purpose                                 |
| ---------- | --------------------------------------- |
| React.js   | Frontend user interface                 |
| Node.js    | JavaScript runtime                      |
| Express.js | Backend and REST APIs                   |
| MongoDB    | Product and user data storage           |
| Mongoose   | MongoDB object modelling                |
| JWT        | Authentication tokens                   |
| bcryptjs   | Password hashing                        |
| AI / NLP   | Planned natural-language product search |

## 📁 Project Structure

```text
ShopSmart-AI/
├── client/                 # React frontend
└── server/
    ├── config/             # Database configuration
    ├── controllers/        # Request handlers
    ├── middleware/         # Authentication middleware
    ├── models/             # Mongoose models
    ├── routes/             # API routes
    ├── .env                # Local environment variables
    └── server.js           # Express server entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account or local MongoDB installation
- Git

### 1. Clone the repository

```bash
git clone https://github.com/shlokaloni282/ShopSmart-AI.git
cd ShopSmart-AI
```

### 2. Configure the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Use your own credentials. Never commit your `.env` file or expose secrets publicly.

### 3. Start the backend

```bash
npm run dev
```

If your `package.json` does not define a `dev` script, add one or use the appropriate start command.

### 4. Start the frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## 🔮 Future Work

- AI-powered product recommendations based on user preferences.
- Product comparison with explanations of key trade-offs.
- Smart cart and budget-aware product combinations.
- Wishlist and personalized shopping history.
- AI-generated summaries of genuine customer reviews.
- Improved testing, error handling, and deployment.

## 🎯 Learning Objectives

- Build a full-stack application using the MERN stack.
- Design and integrate RESTful APIs.
- Implement authentication and secure password storage.
- Work with MongoDB data models and queries.
- Explore practical AI integration in an e-commerce workflow.

## 👩‍💻 Author

**Shloka Loni**

- GitHub: [@shlokaloni282](https://github.com/shlokaloni282)

---

_ShopSmart-AI is a learning project under active development._
