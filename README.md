# Affiliate System Microservice

This is a Node.js microservice developed by Ashley Brown to handle an affiliate system for a music reviewing app. The service allows affiliates to generate unique codes, track referrals made through these codes, and manage commissions or rewards.

## Features

- Generate unique affiliate codes.
- Track referred users.
- Manage commission payouts for affiliates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

## Installation

1. **Clone the repository:**
    Download source zip and run below command.
2. **Install dependencies:**
npm install
3. **Set up environment variables:**
Create a .env file in the root directory and configure the following variables:
MONGO_URI=your_mongodb_connection_string
PORT=3000
4. **Run the server:**
npm start

The service will be available at http://localhost:3000

## Usage
To test the API, you can use curl, Postman, or any other HTTP client. Below are the details of the available endpoints.
e.x: 
curl -X POST -H "Content-Type: application/json" -d "{\"affiliateId\":\"Ashley Brown\",\"referredEmail\":\"ashleybrown555@gmail.com\",\"commission\":\"2\"}" http://localhost:3000/affiliate

## API Endpoints
POST /affiliate
Create a new affiliate code and save the affiliate details.

    URL: /affiliate

        Method: POST
        Request Body:
            {
            "affiliateId": "user123",
            "referredEmail": "referred@example.com"
            }
        Success Response:
            Code: 201 Created
            {
            "_id": "generatedObjectId",
            "affiliateId": "user123",
            "affiliateCode": "generatedUniqueCode",
            "referredUserId": "referred@example.com",
            "commission": 10,
            "createdAt": "2024-08-08T00:00:00.000Z",
            "updatedAt": "2024-08-08T00:00:00.000Z",
            "__v": 0
            }
        Error Response:
            Code: 400 Bad Request
            {
            "error": "affiliateId and referredEmail are required"
            }

## Error handling
    All errors are handled with appropriate HTTP status codes and messages:

    400 Bad Request: Returned when required fields are missing or invalid.
    500 Internal Server Error: Returned when there is a server-side issue.

## Environment Variables
    MONGO_URI: Your MongoDB connection string.
    PORT: The port on which the server runs (default is 3000).

## Dependencies
    Express: Web framework for Node.js.
    Mongoose: MongoDB object modeling for Node.js.
    Dotenv: Loads environment variables from a .env file into process.env.
    Nodemon: Utility that monitors for changes in your source and automatically restarts your server.