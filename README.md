# Blog Application Frontend

A modern, responsive frontend for a blog application built with React and TypeScript, designed to work with a Laravel backend API.

## Features

- Display list of blog posts
- View individual blog post details
- Responsive design for various screen sizes
- TypeScript for enhanced code quality and developer experience
- Integration with Laravel backend API

## Requirements

- Node.js 14+
- npm or yarn
- Git

## Setup and Installation

1. Clone the repository (if not already done for the backend):
   ```
   git clone https://github.com/binayakgc/CRUD-LRJ.git
   cd CRUD-LRJ/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the project root and add:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   ```

## Running the Application

Start the React development server:
```
npm start
```

The application will be accessible at `http://localhost:3000`.

## Project Structure

- **Components**: `src/components/`
- **Services**: `src/services/`
- **Interfaces**: `src/interfaces/`
- **Styles**: `src/index.css`

## Key Components

- `BlogList`: Displays a list of all blog posts
- `BlogDetail`: Shows the full content of a selected blog post
- `blogService`: Handles API calls to the Laravel backend

## Customization

- Modify components in `src/components/` to change the application's appearance and behavior
- Update `src/services/blogService.ts` to adjust API integration
- Edit `src/index.css` for global styles

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Acknowledgments

- React - The web framework used
- TypeScript - For static typing
- Axios - HTTP client for API requests