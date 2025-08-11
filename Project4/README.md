# Project 4 – Question & Answer Module with Fastify Server

This project implements a modular JavaScript library for managing a simple question-and-answer dataset. Alongside the module, it includes a Node.js server built with Fastify that uses RESTful API endpoints to interact with the data.

### Skills Developed
- Modular JavaScript programming with multiple exported functions  
- Managing arrays of objects and performing CRUD operations (Create, Read, Update, Delete)  
- Implementing robust input validation and error handling  
- Building a backend server using Fastify for routing and HTTP request handling  
- Designing RESTful API endpoints with dynamic route parameters and different HTTP methods (GET, POST, PUT, DELETE)  
- Handling JSON data input/output and setting appropriate HTTP status codes and headers  

### Technologies Used
- JavaScript (ES6+)
- Node.js
- Fastify web framework

### Server API Endpoints
- `GET /cit/question` — Returns all questions  
- `GET /cit/answer` — Returns all answers  
- `GET /cit/questionanswer` — Returns all question-answer pairs  
- `GET /cit/question/:number` — Returns a specific question by number  
- `GET /cit/answer/:number` — Returns a specific answer by number  
- `GET /cit/questionanswer/:number` — Returns a specific question-answer pair  
- `POST /cit/question` — Adds a new question-answer object (expects JSON body)  
- `PUT /cit/question` — Updates an existing question-answer entry (expects JSON body)  
- `DELETE /cit/question/:number` — Deletes a question-answer entry by number  
