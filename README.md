# Stock-Market

A secure website that visualizes yearly stock data and enables sharing information via email or WhatsApp, featuring a robust authentication system.

## Description

Stock-Market is a comprehensive web application designed to provide robust stock data visualization and sharing capabilities. It includes essential features such as user authentication, stock data visualization, and information sharing via email and WhatsApp. The project utilizes a modern tech stack, ensuring security and performance.

## Features

- **User Authentication:** Secure login and registration system with Google OAuth support.
- **Dashboard:** View and analyze stock data for a particular year.
- **Share Information:** Share stock data via email or WhatsApp.
- **Security Measures:** Includes JWT tokens for secure authentication, bcrypt for password hashing.

## Tech Stack

- **Frontend:** Vite.js (React), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Google OAuth
- **Other:** JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js version 18

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/stock-market.git
   cd stock-market
2. **Install frontend dependencies:**
   ```sh
    npm install
    npm run dev
3. **Navigate to the API folder and install backend dependencies:**
   ```sh
    cd api
    npm install
    npm run dev
4. **Environment Variables:**
   ```sh
    MONGO_URL=your_mongodb_connection_string
    STOCK_API_KEY=your_stock_api_key
    EMAIL_PASS=your_email_password
    TWILIO_TOKEN=your_twilio_token

### Live Demo

To view a live demo of the project, watch the full video [here](https://harsh-bansal.netlify.app/stock-market.mp4).

## Pages

- **Login Page**
- **Register Page**
- **Dashboard Page:** View stock data
- **Share Information Page:** Share stock data via email or WhatsApp

## Security

- **JWT Tokens:** Secure and stateless authentication
- **Password Hashing:** Bcrypt encryption

## Contact

For any inquiries or support, please contact harshbansal699@gmail.com.
