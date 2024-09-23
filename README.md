
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
- **JWT Authentication** with protected routes.
- **Authentication** (Sign In and Sign Up) connected to the backend API.
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
│   ├── App.css          # Application-specific styles
│   ├── App.jsx          # Root React component
│   ├── index.css        # Global CSS styles
│   ├── store/           # Redux store configuration
│   ├── components/      # Reusable components
│   │   └── Navbar.jsx   # Navigation component
│   ├── pages/           # Page components for routes
│   │   ├── HomePage.jsx
│   │   ├── SignInPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── CheckCurrencyHistory.jsx
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

- **Home Page**: `/` (Protected)
- **Sign In**: `/signin`
- **Register**: `/register`
- **Check Currency History**: `/history` (Protected)

The **Home Page** and **Check Currency History** routes are protected, requiring the user to be authenticated. If the user is not authenticated, they are redirected to the **Sign In** page.

## Authentication

The application supports authentication through **JWT (JSON Web Tokens)**. Upon successful sign-in, the JWT is stored in **localStorage** and used for accessing protected routes like the **Home Page** and **Check Currency History**.

- **Sign In**: The Sign In form sends the user’s email and password to the backend, and on successful authentication, it stores the JWT token in **localStorage**.
- **Sign Up**: The Sign Up form allows new users to create an account by sending their username, email, and password to the backend.
- The authentication state is managed using **Redux Toolkit**.

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

**Redux Toolkit** is used for managing the application's state in a scalable way. The store is located in the `src/store` directory.

The **Auth slice** handles authentication logic, including storing the token, managing user information, and tracking the authentication status.

## React Router

React Router is used for client-side routing. The application includes the following routes:

- **Home Page**: `/` (Protected)
- **Sign In**: `/signin`
- **Register**: `/register`
- **Check Currency History**: `/history` (Protected)

## Deployment

The project is deployed on **Vercel**.

Live Version: [RateMate Front-End](https://rate-mate-front-end.vercel.app)

---

## License

This project is open-sourced and available under the MIT license.
