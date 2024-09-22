
# RateMate Front-End

**RateMate Front-End** is a front-end application built using **React.js**, **Vite**, **Tailwind CSS**, **Prettier**, **ESLint**, **Husky**, and **Redux Toolkit**. It is the user interface for interacting with the RateMate API, providing a seamless experience for currency conversions. The app is deployed on **Vercel** and can be accessed live.

Live Version: [RateMate Front-End](https://rate-mate-front-end.vercel.app)

## Features

- **Vite** for fast and efficient build tooling.
- **React.js** as the JavaScript framework.
- **Tailwind CSS** for utility-first styling.
- **Prettier** for code formatting.
- **ESLint** for enforcing coding standards.
- **Husky** for Git hooks.
- **Redux Toolkit** for state management.
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

Redux Toolkit is used for managing the application's state in a scalable way. The store is located in the `src/store` directory.

## Deployment

The project is deployed on **Vercel**.

Live Version: [RateMate Front-End](https://rate-mate-front-end.vercel.app)

---

## License

This project is open-sourced and available under the MIT license.
