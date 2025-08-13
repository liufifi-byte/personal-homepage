# Smart Agriculture System

## Overview
The Smart Agriculture System is a web application designed to facilitate user authentication for two types of users: Planters and Service Agency Managers. The application consists of a backend built with Spring Boot and a frontend developed using React.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **src/main/java/com/example/smartagriculture**: Contains the main application code.
  - `SmartAgricultureApplication.java`: Entry point of the Spring Boot application.
  - `controller/AuthController.java`: Handles HTTP requests related to user authentication.
  - `service/AuthService.java`: Contains business logic for user authentication.
  - `model/User.java`: Represents the user entity in the system.
- **src/main/resources**: Contains configuration and static resources.
  - `application.properties`: Configuration properties for the Spring Boot application.
- **src/test/java/com/example/smartagriculture**: Contains test cases for the application.
- **pom.xml**: Maven configuration file for backend dependencies.

### Frontend
- **public**: Contains static files for the React application.
  - `index.html`: Main HTML file for the React application.
  - `manifest.json`: Metadata for the web application.
- **src/components**: Contains React components.
  - `Login.jsx`: Renders the login form.
  - `Register.jsx`: Renders the registration form.
  - `RoleSwitcher.jsx`: Allows users to switch between roles.
- **src/styles**: Contains CSS styles for the application.
  - `App.css`: Styles including the blue-green gradient background.
- **src/App.jsx**: Main component that sets up routing.
- **src/index.jsx**: Entry point for the React application.
- **src/api/auth.js**: Functions for making API calls for authentication.
- **package.json**: Configuration file for npm dependencies.
- **vite.config.js**: Configuration for Vite, the build tool used for the React application.

## Getting Started

### Prerequisites
- Java 11 or higher
- Node.js and npm
- Maven

### Backend Setup
1. Navigate to the `backend` directory.
2. Run `mvn clean install` to install dependencies.
3. Start the Spring Boot application using `mvn spring-boot:run`.

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Start the React application using `npm run dev`.

## Usage
- Users can register as new users or log in if they already have an account.
- The login page allows users to select their role (Planter or Service Agency Manager).
- After logging in, users will be directed to the appropriate dashboard based on their role.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.