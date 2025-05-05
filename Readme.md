# Dev Job App

Dev Job App is a full-stack web application designed to help developers find jobs and employers post job listings. It features a React-based frontend, a Node.js/Express backend, and MongoDB for data storage. The app provides a seamless user experience for browsing, adding, editing, and deleting job listings.
---
![image](https://github.com/user-attachments/assets/392a6f70-ba8b-4675-bfa1-ff063266367b)

![image](https://github.com/user-attachments/assets/4fa7b54c-205c-4883-8b14-a0cc08af9eb0)
---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [Frontend Overview](#frontend-overview)
6. [Backend Overview](#backend-overview)
7. [API Endpoints](#api-endpoints)
8. [Future Enhancements](#future-enhancements)

---

## Features

- **Job Listings**: Browse job listings with details like title, type, location, salary, and company information.
- **Add Job**: Employers can add new job listings with a form.
- **Edit Job**: Employers can update existing job listings.
- **Delete Job**: Employers can delete job listings.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Loading Spinner**: Displays a spinner while fetching data.
- **Error Handling**: Handles errors gracefully with appropriate messages.
- **Toast Notifications**: Provides feedback for actions like adding, updating, or deleting jobs.

---

## Tech Stack

### Frontend:

- **React**: Component-based UI library.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For styling.
- **React Toastify**: For notifications.
- **React Icons**: For icons.
- **Axios**: For API requests.

### Backend:

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building APIs.
- **Mongoose**: ODM for MongoDB.
- **MongoDB**: NoSQL database.
- **dotenv**: For environment variable management.
- **Nodemon**: For development server auto-reloading.

---

---

## Setup Instructions

### Prerequisites:

- Node.js (v16+)
- MongoDB (local or cloud instance)

### Steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/dev-job-app.git
   cd dev-job-app
   ```
2. **Set Up Backend**:

   - Navigate to the backend folder:
     `cd backend`
   - Install Dependencies
     `npm i`
   - Create a .env file in the root directory and add the following:

   ```bash
   NODE_ENV=development
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   ```

   - Start the backend server:
     `npm run server`

3. **Set Up Frontend**:
   - Navigate to the frontend folder:
     `cd ../frontend`
   - Install dependencies:
     `npm i`
   - Start the development server:
     `npm run dev`
   - Access the Application by clicking on the frontend link

## Frontend Overview

### Pages:

1. **Homepage**:

   - Displays a hero section, cards for developers and employers, recent job listings, and a "View All Jobs" button.

2. **Jobs Page**:

   - Lists all available jobs with a "Read More" button for detailed job descriptions.

3. **Job Page**:

   - Displays detailed information about a specific job.
   - Includes options to edit or delete the job.

4. **Add Job Page**:

   - Form to add a new job listing.

5. **Edit Job Page**:

   - Form to update an existing job listing.

6. **404 Page**:
   - Displays a "404 Not Found" message for invalid routes.

### Components:

- **Navbar**: Navigation bar with links to Home, Jobs, and Add Job pages.
- **Hero**: Hero section with customizable title and subtitle.
- **JobListings**: Fetches and displays job cards.
- **JobListing**: Individual job card with a toggle for full/short description.
- **Spinner**: Loading spinner for API calls.
- **Toast Notifications**: Feedback for user actions.

## Backend Overview

### Routes:

1. **GET /api/jobs**: Fetch all jobs.
2. **GET /api/jobs/:id**: Fetch a specific job by ID.
3. **POST /api/jobs**: Add a new job.
4. **PUT /api/jobs/:id**: Update an existing job.
5. **DELETE /api/jobs/:id**: Delete a job.

### Models:

- **JobModel**: Schema for job listings, including fields for title, type, description, location, salary, and company details.

### Controllers:

- **jobController.js**: Handles CRUD operations for jobs.

## API Endpoints

### Base URL:

`http://localhost:5000/api/jobs`

| Method | Endpoint | Description            | Payload Example                                                        |
| ------ | -------- | ---------------------- | ---------------------------------------------------------------------- |
| GET    | `/`      | Fetch all jobs         | N/A                                                                    |
| GET    | `/:id`   | Fetch a specific job   | N/A                                                                    |
| POST   | `/`      | Add a new job          | `{ "title": "React Dev", "type": "Full-Time", "location": "NY", ... }` |
| PUT    | `/:id`   | Update an existing job | `{ "title": "Updated Title", "type": "Part-Time", ... }`               |
| DELETE | `/:id`   | Delete a job           | N/A                                                                    |

## Future Enhancements

1. **Authentication**:

   - Add user authentication for employers and job seekers.
   - Restrict job management to authenticated users.

2. **Search and Filters**:

   - Add search functionality and filters for job type, location, and salary.

3. **Pagination**:

   - Implement pagination for job listings.

4. **Improved UI**:

   - Enhance the UI with animations and better responsiveness.

5. **Deployment**:

   - Deploy the app to platforms like Vercel (frontend) and Render/Heroku (backend).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Developed by **Pranav**.
