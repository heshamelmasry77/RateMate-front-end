# RateMate Front-End

**RateMate Front-End** is a front-end application built using **React.js**, **Vite**, **Tailwind CSS**, **Prettier**, **ESLint**, **Husky**, **Redux Toolkit**, and **React Router**. It is the user interface for interacting with the RateMate API, providing a seamless experience for currency conversions. The app is deployed on **Vercel** and can be accessed live.

Live Version: [RateMate Front-End](https://rate-mate-front-end.vercel.app)

## Features

- **Vite** for fast and efficient build tooling.
- **React.js** as the JavaScript framework.
- **Tailwind CSS** for utility-first styling.
- **Prettier** for code formatting.
- **ESLint** for enforcing coding standards.
- **Husky** for Git hooks.
- **Redux Toolkit** for state management.
- **React Router** for client-side routing.
- **Services Folder** for managing API requests like authentication.
- Deployed on **Vercel**.

## Project Structure

```plaintext
RateMate-front-end/
├── dist/                # Distribution folder
├── node_modules/        # Dependencies
├── public/
│   └── index.html       # Main HTML file
├── src/                 # Source code
│   ├── assets/
│   │   └── react.svg    # Sample React logo
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx   # Navigation component
│   │   ├── SignIn.jsx   # Sign In form
│   │   ├── SignUp.jsx   # Sign Up form
│   │   └── ProtectedRoute.jsx # Protected route component
│   ├── pages/           # Page components for routes
│   │   ├── HomePage.jsx
│   │   ├── SignInPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── CheckCurrencyHistory.jsx
│   ├── services/        # API call services
│   │   └── authService.js # Handles sign-in and sign-up authentication services
│   ├── store/           # Redux store configuration
│   │   ├── authSlice.js  # Handles auth state management
│   │   └── store.js      # Redux store configuration
│   ├── App.css          # Application-specific styles
│   ├── App.jsx          # Root React component with routing
│   ├── index.css        # Global CSS styles
│   └── main.jsx         # Main entry point for the React app
├── .gitignore           # Files and folders to ignore in git
├── .prettierignore      # Files to ignore for Prettier
├── .prettierrc          # Prettier configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Routes

The app uses **React Router** to handle client-side routing. The available routes include:

- **Home Page**: `/`
- **Sign In**: `/signin`
- **RegisterPage**: `/register`
- **Check Currency History**: `/history`

Protected routes (accessible only after login):

- **Home Page**: `/`
- **Check Currency History**: `/history`

## Services Folder

The `src/services` folder handles API interactions, specifically authentication for the RateMate API. It includes two main services:

- **signIn**: Authenticates the user and retrieves a JWT token.
- **signUp**: Registers a new user and retrieves a JWT token.

Both services interact with the backend authentication API and handle errors such as invalid credentials or existing user conflicts.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/heshamelmasry77/RateMate-front-end.git
   cd RateMate-front-end
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Build for Production

To create a production build, run:

```bash
npm run build
```

### Format Code with Prettier

To format your code using **Prettier**, run:

```bash
npm run format
```

This will automatically format your code according to the configured rules.

## Husky

Husky is used to manage Git hooks, ensuring that linting and formatting rules are followed before committing changes.

## Redux Toolkit

Redux Toolkit is used for managing the application's state in a scalable way. The store is located in the `src/store` directory and includes an `authSlice` for handling user authentication.

## React Router

React Router is used for client-side routing. The application includes the following routes:

- **Home Page**: `/`
- **Sign In**: `/signin`
- **RegisterPage**: `/register`
- **Check Currency History**: `/history`

Protected routes:

- **Home Page**: `/`
- **Check Currency History**: `/history`

## Deployment

The project is deployed on **Vercel**.

Live Version: [RateMate Front-End](https://rate-mate-front-end.vercel.app)

---

## License

This project is open-sourced and available under the MIT license.
