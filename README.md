# Note-Taking App - Frontend (React)

## Overview
A React-based frontend for a note-taking app. Users can sign up, log in, and manage notes (create, edit, delete) with secure JWT authentication.

## Features

- **User Authentication**: Sign up, log in, and store JWT tokens for authentication.
- **Note Management**: Create, edit, delete, and view notes for authenticated users.

## Technologies

- **React**: Frontend framework for building UI.
- **Recoil**: State management for user authentication.
- **React Router**: For navigating between pages.
- **Axios**: For API requests.
- **Tailwind CSS**: For styling.

---

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **npm**

### Installation

1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd <repo_name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Application Flow

1. **Authentication**:
   - Users sign up or log in at `/auth`.
   - JWT token is saved to **localStorage** after login.

2. **Notes Management**:
   - Authenticated users can create, view, edit, and delete notes.
   - Protected routes require JWT for access.

---

## Pages

- **/auth**: Sign up or log in.
- **/dashboard**: View and manage notes.
- **/notes**: Create a new note.
- **/editnotes/:id**: Edit an existing note.

---

## API Endpoints

- **POST** `/api/users/signup`: Sign up a new user.
- **POST** `/api/users/login`: Log in and get JWT token.
- **GET** `/api/notes`: Get all notes (requires JWT).
- **POST** `/api/notes`: Create a new note (requires JWT).
- **GET** `/api/notes/:noteId`: Get a note by ID (requires JWT).
- **PUT** `/api/notes/:noteId`: Edit a note (requires JWT).
- **DELETE** `/api/notes/:noteId`: Delete a note (requires JWT).

---

## Authentication Flow

1. **Login/Signup**: Users can create an account or log in. Upon success, a JWT token is stored in **localStorage**.
2. **Protected Routes**: Routes like creating/editing notes require JWT for access.

---

## Styling

- **Tailwind CSS**: For responsive, utility-based styling.

---


## Contact

For inquiries, reach out to [Your Contact Info].

---
