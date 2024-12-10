# Redux Login App

A simple React-based application that demonstrates user authentication using Redux for state management. The app allows users to log in, view a dashboard, and log out. It uses React Router for navigation, Tailwind CSS for styling, and Redux Toolkit for efficient state management.

## Features

- **User Authentication**: Users can log in with their email and password.
- **Dashboard**: A protected dashboard is accessible only to authenticated users.
- **Logout**: Users can log out, which redirects them to the login page.
- **Responsive Design**: The app is fully responsive and styled using Tailwind CSS.
- **Redux State Management**: Redux Toolkit is used for managing authentication state.
- **React Router**: Handles navigation between the login page and the dashboard.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A state management library for managing global state in React applications.
- **React Router**: A library for handling navigation and routing in React applications.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and modern designs.
- **Vite**: A fast build tool and development server for modern web applications.
- **GitHub Pages**: Deployment platform for hosting the application.

## Project Structure
redux-login-app/
├── public/ # Static assets (e.g., index.html)
├── src/
│   ├── assets/ # Static assets (e.g., images)
│   ├── components/ # React components
│   │   ├── common/ # Common components (e.g., Header, Footer)
│   │   ├── Dashboard.jsx # Dashboard component
│   │   └── Login.jsx # Login component
│   ├── redux/ # Redux store and slices
│   │   ├── slices/
│   │   │   └── authSlice.js # Redux slice for authentication
│   │   └── store.js # Redux store configuration
│   ├── styles/ # Global styles (e.g., index.css)
│   ├── App.jsx # Main application component
│   ├── main.jsx # Entry point for the application
│   └── index.css # Global CSS styles
├── .gitignore # Files and directories to ignore in Git
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js # Vite configuration

## Installation

To run this project locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/your-username/redux-login-app.git
cd redux-login-app