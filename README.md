# 🛍️ FullStack-30-Product-Gallery

A full-stack **Product Gallery / Product Catalog Management System** built using **Spring Boot (Backend)**, **React (Frontend)**, and **MySQL (Database)**.  
This application allows users to manage products and categories using a clean RESTful architecture.

---

## 🚀 Tech Stack

### 🔹 Backend
- Spring Boot
- Spring Data JPA
- Lombok
- MySQL
- REST APIs

### 🔹 Frontend
- React (Vite)
- Axios
- Bootstrap 5

### 🔹 Database
- MySQL

---

## 📂 Project Structure

FullStack-30-Product-Gallery  
│  
├── backend  
│   └── src/main/java/com/product/productcatalog  
│       ├── config  
│       ├── controller  
│       ├── model  
│       ├── repository  
│       ├── service  
│       ├── CategoryService.java  
│       └── ProductcatalogApplication.java  
│  
└── frontend  
    └── src  
        ├── assets  
        ├── App.jsx  
        ├── ProductList.jsx  
        ├── App.css  
        ├── index.css  
        └── main.jsx  

---

## ⚙️ Features

- Add / Update / Delete Products  
- Manage Categories  
- View Product List  
- RESTful API Integration  
- Layered Architecture (Controller → Service → Repository → DB)  

---

## 🛠️ Backend Setup (Spring Boot)

1️⃣ Navigate to backend folder:
```
cd backend
```

2️⃣ Configure MySQL in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/productdb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3️⃣ Run the application:
```
mvn spring-boot:run
```

Backend runs at:
```
http://localhost:8080
```

---

## 💻 Frontend Setup (React)

1️⃣ Navigate to frontend folder:
```
cd frontend
```

2️⃣ Install dependencies:
```
npm install
```

3️⃣ Start development server:
```
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 🔗 Sample API Endpoints

```
GET    /products
POST   /products
PUT    /products/{id}
DELETE /products/{id}
```

---

## 🏗️ Architecture Overview

- Controller Layer → Handles HTTP requests  
- Service Layer → Business logic  
- Repository Layer → Database operations using JPA  
- React Frontend → UI + API Integration  

---

## 🚀 Future Improvements

- JWT Authentication (Spring Security)  
- Pagination & Sorting  
- Product Image Upload  
- Docker Deployment  

---

## 👨‍💻 Author

**Manu Bharadwaj**

🎥 YouTube: https://youtube.com/@code-with-Bharadwaj  
💼 LinkedIn: https://www.linkedin.com/in/manu-bharadwaj-3507a345/  

---

⭐ If you found this project helpful, consider giving it a star!
