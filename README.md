# Url_shortner

#Backend deployment : https://url-shortner-rudf.onrender.com

# URL Shortener Service

This project provides a simple URL shortening service. It allows you to create short URLs that redirect to long URLs and manage the redirection.

## Features

- Create a short URL from a long URL.
- Redirect to the original long URL using the short URL.
- Handle invalid short URL requests gracefully.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Setup and Installation

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/8309h/Url-shortner.git
    cd url-shortener
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    MONGODB_URI=Your mongo URl
    ```

4. Start the server:

    ```sh
    npm start
    ```

## API Endpoints

### Create a Short URL

**Endpoint:** `POST /url/shorten`

**Request Body:**

```json
{
  "longUrl": "http://www.example.com"
}

**Response:**

{
  "longUrl": "http://www.example.com",
  "shortUrl": "ABc9d"
}

Redirect to the Original URL
Endpoint: GET /url/:shortUrl

Parameters:

shortUrl: The short URL code to be redirected.
Response:

Redirects to the original long URL if the short URL exists.
Returns a 404 status code if the short URL does not exist.

